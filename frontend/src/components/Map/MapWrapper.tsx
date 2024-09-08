import './MapWrapper.css';
import { useAppSelector } from '../../hooks/useInitStore';
import { MapContainer, TileLayer } from 'react-leaflet';
import MarkerClusterGroup from 'react-leaflet-cluster';
import { PropertyPanel } from '../PropertyPanel/PropertyPanel';
import { MapMarkers } from './MapMarkers';
import { MapEvents } from './MapEvents';
import { selectedLatLng, selectedZoom } from '../../store/urlQuery/urlQuery.selector';
import { useProperties } from '../../hooks/useProperties';

export function MapWrapper() {
  const center = useAppSelector(selectedLatLng);
  const zoom = useAppSelector(selectedZoom);
  const properties = useProperties();

  return (
    <>
      <MapContainer
        className="map"
        center={center}
        zoom={zoom}>
        <TileLayer url={`https://tile.openstreetmap.org/{z}/{x}/{y}.png`}/>
        <MarkerClusterGroup>
          <MapMarkers properties={properties} />
          <MapEvents />
        </MarkerClusterGroup>
      </MapContainer>
      <PropertyPanel />
    </>
  );
}