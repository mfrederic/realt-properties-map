import { useEffect, useState } from 'react';
import MarkerClusterGroup from './MarkerCluster/MarkerCluster';
import { selectMarkerClustering } from '../../store/mapOptions/mapOptionsSelector';
import { useProperties } from '../../hooks/useProperties';
import { Markers } from './Markers';
import { useAppSelector } from '../../hooks/useInitStore';

export function MapCluster() {
  const properties = useProperties();
  const markerClustering = useAppSelector(selectMarkerClustering);
  const [key, setKey] = useState(0);

  useEffect(() => {
    setKey(prev => prev + 1);
  }, [markerClustering]);

  return (
    <MarkerClusterGroup
      key={key}
      disableClusteringAtZoom={markerClustering}
      showCoverageOnHover={false}
      maxClusterRadius={100}
      zoomToBoundsOnClick={true}
      spiderfyOnMaxZoom={false}
      removeOutsideVisibleBounds={true}
      animate={false}
      chunkedLoading={true}
      chunkInterval={100}
      chunkDelay={50}
      singleMarkerMode={false}
    >
      <Markers properties={properties} />
    </MarkerClusterGroup>
  );
}