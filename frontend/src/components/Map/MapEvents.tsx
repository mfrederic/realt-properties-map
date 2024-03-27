import { useEffect } from 'react';
import { useLeafletContext } from '@react-leaflet/core';
import { useAppSelector } from '../../hooks/useInitStore';
import { selectedLatLng } from '../../store/marker/markerSelector';
import { LatLng } from 'leaflet';

let previousLatLng: Pick<LatLng, 'lat' | 'lng'> | undefined;
export function MapEvents() {
  const { map } = useLeafletContext();
  const latLng = useAppSelector(selectedLatLng);

  useEffect(() => {
    if (latLng) {
      previousLatLng = latLng;
      return;
    }
    if (!latLng && previousLatLng) {
      map.setView(previousLatLng, map.getZoom());
      previousLatLng = undefined;
    }
  }, [latLng, map]);

  return null;
}