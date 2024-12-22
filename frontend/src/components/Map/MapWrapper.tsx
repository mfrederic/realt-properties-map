import './MapWrapper.scss';
import { useAppSelector } from '../../hooks/useInitStore';
import { MapContainer, TileLayer } from 'react-leaflet';
import MarkerClusterGroup from 'react-leaflet-cluster';
import { PropertyPanel } from '../PropertyPanel/PropertyPanel';
import { MapEvents } from './MapEvents';
import { selectedLatLng, selectedZoom } from '../../store/urlQuery/urlQuery.selector';
import { useProperties } from '../../hooks/useProperties';
import { Markers } from './Markers';
import { selectMarkerClustering } from '../../store/mapOptions/mapOptionsSelector';

export function MapWrapper() {
  const center = useAppSelector(selectedLatLng);
  const zoom = useAppSelector(selectedZoom);
  const properties = useProperties();
  const markerClustering = useAppSelector(selectMarkerClustering);

  return (
    <>
      <MapContainer
        className="map"
        center={center}
        zoom={zoom}>
        <TileLayer url={`https://tile.openstreetmap.org/{z}/{x}/{y}.png`}/>
        <MarkerClusterGroup
          disableClusteringAtZoom={markerClustering}
          showCoverageOnHover={false}
          chunkedLoading={true}
          maxClusterRadius={100}
          zoomToBoundsOnClick={true}
          spiderfyOnMaxZoom={false}
          removeOutsideVisibleBounds={true}
          animate={false}
          chunkInterval={100}
          chunkDelay={50}
          singleMarkerMode={false}
        >
          <Markers properties={properties} />
          <MapEvents />
        </MarkerClusterGroup>
      </MapContainer>
      <PropertyPanel />
    </>
  );
}