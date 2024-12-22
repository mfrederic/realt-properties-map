import { Property } from '../../types/property';
import { Marker, useMap } from 'react-leaflet';
import { generateSimpleIcon, zoomMapOffsets } from './map.utils';
import { useAppDispatch, useAppSelector } from '../../hooks/useInitStore';
import { selectMapOptions } from '../../store/mapOptions/mapOptionsSelector';
import { selectedMarker } from '../../store/marker/markerSelector';
import { selectedProperty } from '../../store/urlQuery/urlQuery.selector';
import { useTranslation } from 'react-i18next';
import { LeafletMouseEvent } from 'leaflet';
import { useCallback, useEffect, useMemo } from 'react';
import { setSelected } from '../../store/marker/markerReducer';
import { setSelectedProperty } from '../../store/urlQuery/urlQuery.reducer';
import { filterProperties } from '../../utils/properties';
import { selectFiltering } from '../../store/filtering/filteringSelector';

export function Markers(props: { properties: Property[] }) {
  const { t } = useTranslation('common');
  const map = useMap();
  const dispatch = useAppDispatch();
  const {
    differentiateOwned,
    markerOpacity,
    showIcon,
  } = useAppSelector(selectMapOptions);
  const {
    displayAll,
    displayGnosis,
    displayRmm,
  } = useAppSelector(selectFiltering);
  const selectedMarkerProperty = useAppSelector(selectedMarker);
  const selectedUrlParam = useAppSelector(selectedProperty);

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
    if (selectedUrlParam) {
      const selectedProperty = props.properties.find((property) => property.address === selectedUrlParam);
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
  }, [props.properties]);

  useEffect(() => {
    if (!selectedMarkerProperty) {
      return;
    }
    const currentZoom = map.getZoom();
    const offset = zoomMapOffsets[currentZoom as keyof typeof zoomMapOffsets];
    const newCenter = {
      lat: selectedMarkerProperty.coordinate.lat,
      lng: selectedMarkerProperty.coordinate.lng - offset
    };
    map.panTo(newCenter, {
      animate: true,
      duration: 0.3,
      easeLinearity: 0.2,
    });
  }, [selectedMarkerProperty, map]);
  
  const filteredProperties = useMemo(() => {
    return filterProperties(props.properties, displayAll, displayGnosis, displayRmm, selectedUrlParam);
  }, [props.properties, displayAll, displayGnosis, displayRmm, selectedUrlParam]);

  return (
    <>
      {filteredProperties.map((property) => (
        <Marker
          key={property.address}
          position={property.coordinates}
          icon={generateSimpleIcon(property, markerOpacity, selectedMarkerProperty?.address === property.address, differentiateOwned, showIcon)}
          alt={t('propertyType.' + property.propertyType)}
          title={t('propertyType.' + property.propertyType)}
          eventHandlers={{
            click: (event) => onMarkerClicked(event, property),
          }}
        />
      ))}
    </>
  )
}