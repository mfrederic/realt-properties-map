import { useCallback, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { TFunction } from 'i18next';
import { MarkerClusterGroup, marker, Marker, LeafletMouseEvent, LeafletEvent, DivIcon, Icon, IconOptions } from 'leaflet';
import { useLeafletContext } from '@react-leaflet/core';
import 'leaflet.markercluster';
import Env from '../../utils/env';
import { Property } from '../../types/property';
import { useAppDispatch, useAppSelector } from '../../hooks/useInitStore';
import { setSelected } from '../../store/marker/markerReducer';
import { setLatLng, setSelectedProperty, setZoom } from '../../store/urlQuery/urlQuery.reducer';
import { selectedProperty } from '../../store/urlQuery/urlQuery.selector';
import { selectedMarker } from '../../store/marker/markerSelector';
import { Maybe } from '../../types/global';
import { analyticsEvent } from '../../services/analytics';
import { filterProperties } from '../../utils/properties';
import { debounce } from '../../utils/debounce';
import { getCleanMarkerCluster, zoomMapOffsets } from './map.utils';
import { getPropertyTypeName } from '../../services/realtokens';

const markers: Map<string, Marker> = new Map();
export function MapMarkers({
  properties,
}: {
  properties: Property[];
}) {
  
  const { t } = useTranslation('common');
  const dispatch = useAppDispatch();
  const { map } = useLeafletContext();
  const {
    displayAll,
    displayGnosis,
    displayRmm,
    differentiateOwned,
    markerOpacity,
    markerClustering,
    showIcon,
  } = useAppSelector((state) => state.mapOptions);
  const selectedUrlParam = useAppSelector(selectedProperty);
  const property = useAppSelector(selectedMarker);
  const [markerCluster, setMarkerCluster] =  useState<MarkerClusterGroup>(getCleanMarkerCluster(markerClustering));

  function generateSimpleIcon(
    property: Property,
    markerOpacity: number,
    selected: boolean,
    differentiateOwned: boolean,
    showIcon: boolean,
  ): Icon<IconOptions> {
    let iconUrl = `${Env.VITE_REALT_PROPERTIES_BACKEND_URL}properties/pin?occupation=${property.iconColorClass}&propertyType=${getPropertyTypeName(property.propertyType)}`;
    if (property.ownedAmount > 0 && differentiateOwned) {
      iconUrl += `&owned`;
    }
    if (showIcon) {
      iconUrl += `&icon`;
    }
    let classNames = `marker-svg ${property.ownedAmount > 0 ? 'marker-owned' : 'marker-not-owned'} marker-${property.address}`;
    if (!differentiateOwned || property.ownedAmount <= 0) {
      classNames += ` opacity-${markerOpacity * 100}`;
    }
    if (selected) {
      classNames += ' selected';
    }
    if (differentiateOwned && property.ownedAmount > 0) {
      classNames += ' drop-shadow-md';
    }
    return new Icon({
      iconUrl,
      iconSize: [40, 40],
      iconAnchor: [20, 40],
      className: classNames,
    });
  }

  const memoizedCreateMarker = useCallback((
    property: Property,
    markerOpacity: number,
    differentiateOwned: boolean,
    selected: Maybe<string>,
    showIcon: boolean,
    t: TFunction<"common", undefined>,
  ) => {
    return marker([property.coordinate.lat, property.coordinate.lng], {
      icon: generateSimpleIcon(property, markerOpacity, selected === property.address, differentiateOwned, showIcon),
      alt: t('propertyType.' + property.propertyType),
      title: t('propertyType.' + property.propertyType),
    });
  }, []);

  const onMarkerClicked = useCallback((event: LeafletMouseEvent, property: Property) => {
    dispatch(setSelected({
      property,
      latlng: {
        lat: event.latlng.lat,
        lng: event.latlng.lng,
      },
    }));
    dispatch(setSelectedProperty(property.address));
  }, [dispatch]);

  useEffect(() => {
    if (!property) {
      return;
    }

    queueMicrotask(() => {
      analyticsEvent({
        action: 'marker_clicked',
        category: 'map',
        label: property.address,
      });
    });

    requestAnimationFrame(() => {
      document
        .querySelectorAll('.marker-svg.selected')
        .forEach((el) => el.classList.remove('selected'));
      const markerElement = markers.get(property.address)?.getElement();
      if (markerElement) {
        markerElement.classList.add('selected');
      }
    });

    const currentZoom = map.getZoom();
    const offset = zoomMapOffsets[currentZoom as keyof typeof zoomMapOffsets];
    
    const newCenter = {
      lat: property.coordinate.lat,
      lng: property.coordinate.lng - offset
    };

    map.panTo(newCenter, {
      animate: true,
      duration: 0.5,
      easeLinearity: 0.25
    });

  }, [property]);

  function clearMap() {
    if (!markerCluster || markers.size === 0) {
      return;
    }
    
    const batchSize = 100;
    const markerArray = Array.from(markers.values());
    
    for (let i = 0; i < markerArray.length; i += batchSize) {
      const batch = markerArray.slice(i, i + batchSize);
      batch.forEach(marker => {
        marker.clearAllEventListeners();
        markerCluster.removeLayer(marker);
      });
    }

    markers.clear();
    map.removeLayer(markerCluster);
    map.removeEventListener('zoom');
    map.removeEventListener('moveend');
  }

  const debouncedZoomHandler = debounce((event: LeafletEvent) => {
    dispatch(setZoom(event.target.getZoom()));
  }, 300);

  const debouncedMoveHandler = debounce((event: LeafletEvent) => {
    dispatch(setLatLng([event.target.getCenter().lat, event.target.getCenter().lng]));
  }, 300);

  useEffect(() => {
    clearMap();
    markerCluster.clearLayers();
    setMarkerCluster(getCleanMarkerCluster(markerClustering));

    const filteredProperties = filterProperties(properties, displayAll, displayGnosis, displayRmm, selectedUrlParam);
    const chunkSize = 100;
    let currentIndex = 0;

    function processNextChunk() {
      const chunk = filteredProperties.slice(currentIndex, currentIndex + chunkSize);
      
      if (chunk.length === 0) {
        map.addLayer(markerCluster);
        return;
      }

      chunk.forEach((property) => {
        const marker = memoizedCreateMarker(property, markerOpacity, differentiateOwned, selectedUrlParam, showIcon, t)
          .addEventListener('click', (event) => onMarkerClicked(event, property));
        markers.set(property.address, marker);
        markerCluster.addLayer(marker);
      });

      currentIndex += chunkSize;
      requestAnimationFrame(processNextChunk);
    }

    processNextChunk();
    
    map.addEventListener('zoom', debouncedZoomHandler);
    map.addEventListener('moveend', debouncedMoveHandler);

    if (selectedUrlParam) {
      const selectedProperty = properties.find((property) => property.address === selectedUrlParam);
      if (selectedProperty) {
        dispatch(setSelected({
          property: selectedProperty,
          latlng: {
            lat: selectedProperty.coordinate.lat,
            lng: selectedProperty.coordinate.lng,
          },
        }));
      }
    }

    return () => {
      clearMap();
      debouncedZoomHandler.cancel();
      debouncedMoveHandler.cancel();
    }
  }, [properties, displayAll, displayGnosis, displayRmm, differentiateOwned, markerOpacity, markerClustering, showIcon]);

  return null;
}
