import { MapContainer, TileLayer } from 'react-leaflet';
import { useAppSelector } from '../../hooks/useStore';
import { Property } from '../../types/property';
import MarkerClusterGroup from 'react-leaflet-cluster';
import { LeafletMap } from './LeafletMap';

export function PropertyMap({
  properties,
  setReady,
}: {
  properties: Property[];
  setReady: (ready: boolean) => void;
}) {
  const wallets = useAppSelector((state) => state.wallets.wallets);

  return (
    <MapContainer
      className="map"
      center={[32, -83]}
      zoom={4}
      whenReady={() => setReady(true)}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <MarkerClusterGroup
        chunkedLoading
        showCoverageOnHover={false}
        maxClusterRadius={100}>
        <LeafletMap
          properties={properties}
          wallets={wallets} />
      </MarkerClusterGroup>
    </MapContainer>
  )
}