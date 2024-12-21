import { DivIcon, markerClusterGroup } from "leaflet";
import { Property } from "../../types/property";
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

export const OWNED_SELECTOR = '[data-marker-owned]';
export const CSSCLASSES = {
  owned: 'stroke-white owned drop-shadow-lg',
  notOwned: 'opacity-80',
}

function pinSvg(
  occupationClass: string,
  propertyType: string,
  ...cssClasses: string[]
) {
  const filteredCssClasses = cssClasses
    .filter((cssClass) => cssClass !== '')
    .join(' ')
    .split(' ')
    .map((cssClass) => cssClass.trim());

  // Create left half of the pin
  const leftPath = document.createElementNS('http://www.w3.org/2000/svg', 'path');
  leftPath.classList.add(`${occupationClass}-pin`, 'border-right', 'border-white', 'stroke-white');
  leftPath.setAttribute('d', 'M24,0 A24,24,0,0,0,0,24C0,37.25,12,48,24,72L24,0z');

  // Create right half of the pin
  const rightPath = document.createElementNS('http://www.w3.org/2000/svg', 'path');
  rightPath.classList.add(`${propertyType}-pin`, 'border-left', 'border-white', 'stroke-white');
  rightPath.setAttribute('d', 'M24,0 L24,72C36,48,48,37.25,48,24A24,24,0,0,0,24,0Z');

  // Create inner circle
  const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
  circle.setAttribute('cx', '24');
  circle.setAttribute('cy', '24');
  circle.setAttribute('r', '9');
  circle.classList.add('fill-white');

  const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  svg.setAttribute('width', '50');
  svg.setAttribute('height', '50');
  svg.setAttribute('viewBox', '0 0 50 78');
  svg.classList.add('marker-svg', ...filteredCssClasses);

  svg.appendChild(leftPath);
  svg.appendChild(rightPath);
  svg.appendChild(circle);

  return svg;
}

function getAnnualYieldTier(annualYield: number) {
  if (annualYield >= 11) {
    return 'yield-11';
  }
  return `yield-${Math.round(annualYield)}`;
}

function getRentedTier(rentedPercentage: number) {
  if (rentedPercentage === 1) {
    return 'full';
  }
  if (rentedPercentage >= 0.9) {
    return 'high';
  }
  if (rentedPercentage >= 0.5) {
    return 'medium';
  }
  return 'low';
}

function iconMarker(
  property: Property,
  markerOpacity: number,
  svgClasses: string[] = [],
  divClasses: string[] = [],
): HTMLDivElement {
  const icon = document.createElement('i');
  icon.classList.add('pin-icon', 'text-2xl', 'drop-shadow-sm', 'mf-icon', 'material-icons', 'absolute', 'top-[10%]', 'left-[25%]');
  icon.textContent = property.icon;

  const div = document.createElement('div');
  div.classList.add('relative', 'marker-icon', ...divClasses);
  div.style.opacity = markerOpacity.toString();
  div.dataset.marker = property.address;
  div.dataset.markerOwned = property.ownedAmount > 0 ? 'true' : 'false';
  div.dataset.markerSource = property.source ?? '';
  div.dataset.markerWallet = property.ownerWallets.join(' ');
  div.appendChild(
    pinSvg(
      property.iconColorClass,
      getPropertyTypeName(property.propertyType),
      ...svgClasses,
    ),
  );
  div.appendChild(icon);

  return div;
}

export function generateIcon(
  property: Property,
  differentiateOwned: boolean,
  markerOpacity: number,
  selected: boolean,
) {
  const owned = property.ownedAmount > 0;
  const ownedClass = differentiateOwned && owned ? CSSCLASSES.owned : CSSCLASSES.notOwned;

  return new DivIcon({
    html: iconMarker(
      property,
      markerOpacity,
      [ownedClass, selected ? 'selected' : ''],
      [
        getRentedTier(property.rentedUnits / property.totalUnits),
        getAnnualYieldTier(property.annualPercentageYield),
      ],
    ),
    iconSize: [50, 50],
    iconAnchor: [25, 50],
  });
}

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