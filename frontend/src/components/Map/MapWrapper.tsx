import './MapWrapper.css';
import { useAppSelector } from '../../hooks/useInitStore';
import { getOwnedProperties } from '../../services/tokens';
import { selectWalletsList } from '../../store/wallet/walletSelector';
import { selectRealtokensList } from '../../store/realtokens/realtokensSelector';
import { MapContainer, TileLayer } from 'react-leaflet';
import MarkerClusterGroup from 'react-leaflet-cluster';
import { useEffect, useState } from 'react';
import { Property } from '../../types/property';
import { PropertyPanel } from './PropertyPanel';
import { MapMarkers } from './MapMarkers';
import { MapEvents } from './MapEvents';
import { selectedLatLng, selectedZoom } from '../../store/urlQuery/urlQuery.selector';

export function MapWrapper() {
  const realToken = useAppSelector(selectRealtokensList);
  const wallets = useAppSelector(selectWalletsList);
  const center = useAppSelector(selectedLatLng);
  const zoom = useAppSelector(selectedZoom);

  const [properties, setProperties] = useState<Property[]>([]);

  useEffect(() => {
    setProperties(getOwnedProperties(realToken, wallets));
  }, [realToken, wallets]);

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