import './MapWrapper.scss';
import { useAppSelector } from '../../hooks/useInitStore';
import { MapContainer, TileLayer } from 'react-leaflet';
import { PropertyPanel } from '../PropertyPanel/PropertyPanel';
import { selectedLatLng, selectedZoom } from '../../store/urlQuery/urlQuery.selector';
import { MapCluster } from './MapCluster';
import { MapEvents } from './MapEvents';

export function MapWrapper() {
  const center = useAppSelector(selectedLatLng);
  const zoom = useAppSelector(selectedZoom);

  return (
    <>
      <MapContainer
        className="map"
        center={center}
        zoom={zoom}>
        <TileLayer url={`https://tile.openstreetmap.org/{z}/{x}/{y}.png`}/>
        <MapCluster />
        <MapEvents />
      </MapContainer>
      <PropertyPanel />
    </>
  );
}