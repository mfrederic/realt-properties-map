import { useEffect } from 'react';
import { LatLng } from 'leaflet';
import { useLeafletContext } from '@react-leaflet/core';
import { useAppSelector } from '../../hooks/useInitStore';
import { selectedLatLng } from '../../store/marker/markerSelector';
import { selectMarkerOpacity } from '../../store/mapOptions/mapOptionsSelector';

let previousLatLng: Pick<LatLng, 'lat' | 'lng'> | undefined;
export function MapEvents() {
  const { map } = useLeafletContext();
  const latLng = useAppSelector(selectedLatLng);
  const markerOpacity = useAppSelector(selectMarkerOpacity);

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

  useEffect(() => {
    document
      .querySelectorAll('.marker-icon')
      .forEach((el) => {
        el.setAttribute('style', `opacity: ${markerOpacity}`);
      });
  }, [markerOpacity]);

  return null;
}