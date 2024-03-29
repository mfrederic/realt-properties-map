import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { TFunction } from 'i18next';
import { DivIcon, MarkerClusterGroup, marker, Marker, markerClusterGroup, LeafletMouseEvent } from 'leaflet';
import { useLeafletContext } from '@react-leaflet/core';
import 'leaflet.markercluster';
import { Wallet } from '../../types/wallet';
import { Property } from '../../types/property';
import { useAppDispatch, useAppSelector } from '../../hooks/useInitStore';
import { setSelected } from '../../store/marker/markerReducer';

function pinSvg(cssClasses: string) {
  return `<svg width="50" height="50" viewBox="0 0 50 78" class="marker-svg ${cssClasses
    }"><path class="at-176__pin" d="M24,0A24,24,0,0,0,0,24C0,37.25,20,72,24,72S48,37.25,48,24A24,24,0,0,0,24,0Zm0,33a9,9,0,1,1,9-9A9,9,0,0,1,24,33Z"/></svg>`;
}

// TODO - Map options for opacity
export function generateIcon(
  property: Property,
  markerOpacity: number,
) {
  const owned = property.ownedAmount > 0;
  return new DivIcon({
    html:
      `<div class="relative marker-icon"
  style="opacity: ${markerOpacity};"
  data-marker="${property.address}"
  ${owned ? 'data-marker-owned' : ''}
  ${property.source ? `data-marker-${property.source}` : ''}
  ${property.ownerWallets.length ? `data-marker-wallet="${property.ownerWallets.join(' ')}"` : ''}>
  ${pinSvg(`${property.iconColorClass}-icon ${owned ? 'stroke-white owned drop-shadow-lg' : 'opacity-80'}`)}
  <i class="text-3xl drop-shadow-sm mf-icon material-icons absolute top-0 left-[20%]">${property.icon}</i>
</div>`,
    iconSize: [50, 50],
    iconAnchor: [25, 50],
  });
}

function filterProperties(
  properties: Property[],
  displayAll: boolean,
  displayGnosis: boolean,
  displayRmm: boolean,
) {
  return properties
    .filter((property) => {
      let toInclude = !property.isOld && property.productType !== 'equity_token';
      if (!displayAll && property.ownedAmount <= 0) {
        toInclude = false;
      }
      if (!displayGnosis && property.source === 'gnosis') {
        toInclude = false;
      }
      if (!displayRmm && property.source === 'rmm') {
        toInclude = false;
      }
      return toInclude;
    })
}

function createMarker(property: Property, markerOpacity: number, t: TFunction<"common", undefined>): Marker {
  return marker([property.coordinate.lat, property.coordinate.lng], {
    icon: generateIcon(property, markerOpacity),
    alt: property.propertyTypeName,
    title: t('propertyType.' + property.propertyTypeName),
  });
}

const zoomMapOffsets = {
  0: 500,
  1: 156,
  2: 78,
  3: 38.4,
  4: 19.2,
  5: 9.28,
  6: 4.64,
  7: 2.56,
  8: 1.28,
  9: 0.64,
  10: 0.32,
  11: 0.16,
  12: 0.08,
  13: 0.04,
  14: 0.02,
  15: 0.01,
  16: 0.005,
  17: 0.0025,
  18: 0.00125,
  19: 0.000625,
};

let markerCluster: MarkerClusterGroup;
let markers: Array<Marker> = [];
export function MapMarkers({
  properties,
  wallets,
}: {
  properties: Property[];
  wallets: Wallet[];
}) {
  const { t } = useTranslation('common');
  const dispatch = useAppDispatch();
  const { map } = useLeafletContext();
  const {
    displayAll,
    displayGnosis,
    displayRmm,
    markerOpacity,
  } = useAppSelector((state) => state.mapOptions);

  function onMarkerClicked(event: LeafletMouseEvent, property: Property) {
    const currentZoom = map.getZoom();
    map.setView({
      lat: event.latlng.lat,
      lng: event.latlng.lng - zoomMapOffsets[currentZoom as keyof typeof zoomMapOffsets],
    });
    document
      .querySelectorAll('.marker-svg.selected')
      .forEach((el) => el.classList.remove('selected'));
    event.sourceTarget._icon
      .querySelector('svg')?.classList
      .add('selected');
    dispatch(setSelected({
      property,
      latlng: {
        lat: event.latlng.lat,
        lng: event.latlng.lng,
      },
    }));
  }

  function clearMap() {
    if (!markerCluster) {
      return;
    }
    markers.forEach((marker) => {
      marker.clearAllEventListeners();
    });
    markers = [];

    markerCluster.clearAllEventListeners();
    markerCluster.clearLayers();
    map.removeLayer(markerCluster);
  }

  function getCleanMarkerCluster() {
    return markerClusterGroup({
      disableClusteringAtZoom: 14,
      showCoverageOnHover: false,
      chunkedLoading: true,
      maxClusterRadius: 100,
      zoomToBoundsOnClick: true,
      spiderfyOnMaxZoom: false,
    });
  }

  useEffect(() => {
    clearMap();
    markerCluster = getCleanMarkerCluster();

    filterProperties(properties, displayAll, displayGnosis, displayRmm)
      .forEach((property) => {
        const marker = createMarker(property, markerOpacity, t)
          .addEventListener('click', (event) => onMarkerClicked(event, property));
        markers.push(marker);
        markerCluster.addLayer(marker);
      });
    map.addLayer(markerCluster);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [properties, displayAll, displayGnosis, displayRmm]);

  return null;
}