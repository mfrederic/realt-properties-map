import { useEffect } from 'react';
import { LatLng } from 'leaflet';
import { useLeafletContext } from '@react-leaflet/core';
import { useAppSelector } from '../../hooks/useInitStore';
import { selectedLatLng } from '../../store/marker/markerSelector';
import { selectDifferentiateOwned, selectMarkerOpacity } from '../../store/mapOptions/mapOptionsSelector';
import { CSSCLASSES, OWNED_SELECTOR } from './MapMarkers';

let previousLatLng: Pick<LatLng, 'lat' | 'lng'> | undefined;
export function MapEvents() {
  const { map } = useLeafletContext();
  const latLng = useAppSelector(selectedLatLng);
  const markerOpacity = useAppSelector(selectMarkerOpacity);
  const differentiateOwned = useAppSelector(selectDifferentiateOwned);

  useEffect(() => {
    if (latLng) {
      previousLatLng = latLng;
      return;
    }
    if (!latLng && previousLatLng) {
      map.flyTo(previousLatLng, map.getZoom(), {
        duration: 0.5,
        easeLinearity: 0.25,
      });
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

  useEffect(() => {
    const owned = CSSCLASSES.owned.split(' ');
    const notOwned = CSSCLASSES.notOwned.split(' ');
    document
      .querySelectorAll(`${OWNED_SELECTOR} .marker-svg`)
      .forEach((el) => {
        el.classList.remove(...notOwned, ...owned);
        if (differentiateOwned) {
          el.classList.add(...owned);
          return;
        }
        el.classList.add(...notOwned);
      });
  }, [differentiateOwned]);

  return null;
}