import { Icon, IconOptions, markerClusterGroup } from "leaflet";
import { Property } from "../../types/property";
import Env from "../../utils/env";
import { getPropertyTypeName } from "../../services/realtokens";

export const zoomMapOffsets: Record<number, number> = {
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


export function getCleanMarkerCluster(clustering: number = 14) {
  return markerClusterGroup({
    disableClusteringAtZoom: clustering,
    showCoverageOnHover: false,
    chunkedLoading: true,
    maxClusterRadius: 100,
    zoomToBoundsOnClick: true,
    spiderfyOnMaxZoom: false,
    removeOutsideVisibleBounds: true,
    animate: false,
    chunkInterval: 100,
    chunkDelay: 50,
    singleMarkerMode: false,
  });
}

export function generateSimpleIcon(
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