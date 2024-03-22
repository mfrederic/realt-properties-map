import { DivIcon, MarkerClusterGroup, marker, Marker, markerClusterGroup } from 'leaflet';
import 'leaflet.markercluster';
import { useLeafletContext } from '@react-leaflet/core';
import { useEffect } from 'react';
import { Wallet } from '../../types/wallet';
import { Property } from '../../types/property';
import { useAppSelector } from '../../hooks/useStore';
import { propertyTooltip } from './PropertyTooltip';

let markers: Map<Marker, Property>;
let markerClusters: MarkerClusterGroup;

function pinSvg(color: string) {
  return `<svg width="50" height="50" viewBox="0 0 50 78" class="${color
    }"><path class="at-176__pin" d="M24,0A24,24,0,0,0,0,24C0,37.25,20,72,24,72S48,37.25,48,24A24,24,0,0,0,24,0Zm0,33a9,9,0,1,1,9-9A9,9,0,0,1,24,33Z"/></svg>`;
}

function generateIcon(icon: string, iconColorClass: string, owned: boolean) {
  return new DivIcon({
    html:
      `<div class="relative">
  ${pinSvg(`${iconColorClass}-icon ${owned ? 'stroke-white owned drop-shadow-lg' : 'opacity-80'}`)}
  <i class="text-3xl drop-shadow-sm mf-icon material-icons absolute top-0 -left-1">${icon}</i>
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
  displayedWalletsAddresses: string[],
) {
  return properties
    .filter((property) => {
      let toInclude = !property.isOld;
      if (!displayAll && property.ownedAmount <= 0) {
        toInclude = false;
      }
      if (!displayGnosis && property.source === 'gnosis') {
        toInclude = false;
      }
      if (!displayRmm && property.source === 'rmm') {
        toInclude = false;
      }
      if (
        displayedWalletsAddresses.length > 0
        && property.ownerWallets.length > 0
        && !property.ownerWallets.some((address) => displayedWalletsAddresses.includes(address.toLowerCase()))
      ) {
        toInclude = false;
      }
      return toInclude;
    })
}

function getMarker(property: Property, detailed: boolean): Marker {
  const createdMarker = marker([property.coordinate.lat, property.coordinate.lng], {
    icon: generateIcon(property.icon, property.iconColorClass, property.ownedAmount > 0),
    alt: property.propertyTypeName,
    title: property.propertyTypeName,
  });
  createdMarker.bindPopup(() => propertyTooltip(property, detailed), {
    offset: [0, -50],
    autoPan: true,
  });
  return createdMarker;
}

export function LeafletMap({
  properties,
  wallets,
}: {
  properties: Property[];
  wallets: Wallet[];
}) {
  const context = useLeafletContext();
  const {
    displayAll,
    displayGnosis,
    displayRmm,
    detailedView,
  } = useAppSelector((state) => state.mapOptions);

  const displayedWalletsAddresses = wallets
    .filter((wallet) => wallet.visible)
    .map((wallet) => wallet.address.toLowerCase());

  useEffect(() => {
    if (markerClusters) {
      markerClusters.clearLayers();
      context.map.removeLayer(markerClusters);;
    }
    markers = new Map<Marker, Property>();
    markerClusters = markerClusterGroup({
      disableClusteringAtZoom: 15,
      showCoverageOnHover: false,
      chunkedLoading: true,
      maxClusterRadius: 100,
    });
    filterProperties(properties, displayAll, displayGnosis, displayRmm, displayedWalletsAddresses)
      .forEach((property) => {
        const marker = getMarker(property, detailedView);
        markers.set(marker, property);
        markerClusters.addLayer(marker);
      });
    context.map.addLayer(markerClusters);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [properties, displayAll, displayGnosis, displayRmm, detailedView, displayedWalletsAddresses]);

  return null;
}