import './MapWrapper.css';
import { useAppSelector } from '../../hooks/useStore';
import { useEffect, useState } from 'react';
import { getOwnedProperties } from '../../services/tokens';
import { Property } from '../../types/property';
import { PropertyMap } from './PropertyMap';
import { Toast } from '../../components/Toast';

export function RealtMap() {
  const walletAddresses = useAppSelector((state) => state.wallets.walletAddresses);
  const realtProperties = useAppSelector((state) => state.properties.properties);

  const [isMapReady, setIsMapReady] = useState(false);
  const [loading, setLoading] = useState(false);
  const [properties, setProperties] = useState<Property[]>([]);

  useEffect(() => {
    if (!isMapReady || realtProperties.length === 0) {
      return;
    }
    setLoading(true);
    getOwnedProperties(realtProperties, walletAddresses)
      .then((content) => {
        setProperties(content);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [walletAddresses, realtProperties, isMapReady])

  return (
    <>
      <PropertyMap properties={properties} setReady={(ready) => setIsMapReady(ready)} />
      {
        loading &&
        <div className="fixed shadow-lg bottom-0 right-0 left-0 z-[1001] divide-y divide-white overflow-y-scroll max-h-96 sm:w-1/2 m-auto sm:rounded-t-md border-t-8 border-slate-700">
          <Toast visible={true} color="bg-sky-400" closable={false}>
            Loading properties...
          </Toast>
        </div>
      }
    </>
  );
}