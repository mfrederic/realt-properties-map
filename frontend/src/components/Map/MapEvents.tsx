import { useEffect } from 'react';
import { LatLng, LeafletEvent } from 'leaflet';
import { useLeafletContext } from '@react-leaflet/core';
import { useAppDispatch, useAppSelector } from '../../hooks/useInitStore';
import { selectedLatLng } from '../../store/marker/markerSelector';
import { selectMarkerOpacity } from '../../store/mapOptions/mapOptionsSelector';
import { useMapEvents } from 'react-leaflet';
import { setLatLng } from '../../store/urlQuery/urlQuery.reducer';
import { setZoom } from '../../store/urlQuery/urlQuery.reducer';

let previousLatLng: Pick<LatLng, 'lat' | 'lng'> | undefined;
export function MapEvents() {
  const { map } = useLeafletContext();
  const dispatch = useAppDispatch();
  const latLng = useAppSelector(selectedLatLng);
  const markerOpacity = useAppSelector(selectMarkerOpacity);

  useMapEvents({
    zoomend: (event: LeafletEvent) => {
      dispatch(setZoom(event.target.getZoom()));
    },
    moveend: (event: LeafletEvent) => {
      dispatch(setLatLng([event.target.getCenter().lat, event.target.getCenter().lng]));
    },
  });

  useEffect(() => {
    if (latLng) {
      previousLatLng = latLng;
      return;
    }
    if (!latLng && previousLatLng) {
      map.panTo(previousLatLng, {
        duration: 0.5,
        easeLinearity: 0.25,
      });
      previousLatLng = undefined;
    }
  }, [latLng, map]);

  useEffect(() => {
    document
      .querySelectorAll('.marker-svg')
      .forEach((el) => {
        el.className = el.className.replace(/opacity-\d+/, '');
        el.classList.add(`opacity-${markerOpacity * 100}`);
      });
  }, [markerOpacity]);

  return null;
}