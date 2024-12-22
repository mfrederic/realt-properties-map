import { markerClusterGroup } from "leaflet";

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