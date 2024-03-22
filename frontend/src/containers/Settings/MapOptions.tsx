import { useAppDispatch, useAppSelector } from "../../hooks/useStore";
import MapIcon from '@mui/icons-material/Map';
import { MapOption } from "./MapOption";
import { setDetailedView, setDisplayAll, setDisplayGnosis, setDisplayRmm } from "../../store/mapOptions/mapOptionsReducer";
import { useEffect } from "react";
import { Setting } from "../../components/Setting";

export function MapOptions() {
  const dispatch = useAppDispatch();

  const mapOptions = useAppSelector((state) => state.mapOptions);
  const walletAddresses = useAppSelector((state) => state.wallets.walletAddresses);

  useEffect(() => {
    if (walletAddresses.length === 0) {
      dispatch(setDisplayAll(true));
    }
  }, []);

  function onDisplayRmm(toggle: boolean) {
    dispatch(setDisplayRmm(toggle));
  }

  function onDisplayGnosis(toggle: boolean) {
    dispatch(setDisplayGnosis(toggle));
  }

  function onDisplayAll(toggle: boolean) {
    dispatch(setDisplayAll(toggle));
  }

  function onDetailedView(toggle: boolean) {
    dispatch(setDetailedView(toggle));
  }

  return (
    <Setting icon={<MapIcon className="inline-block mr-2" />} label="Map Options">
      <MapOption
        id="rmm"
        label="Display RMM"
        checked={mapOptions.displayRmm}
        disabled={walletAddresses.length === 0}
        onChange={(e) => onDisplayRmm(e)} />
      <MapOption
        id="gnosis"
        label="Display Gnosis"
        checked={mapOptions.displayGnosis}
        disabled={walletAddresses.length === 0}
        onChange={(e) => onDisplayGnosis(e)} />
      <MapOption
        id="all"
        label="Include not owned"
        checked={mapOptions.displayAll}
        disabled={walletAddresses.length === 0}
        onChange={(e) => onDisplayAll(e)} />
      <MapOption
        id="detailed"
        label="Detailed property popup"
        checked={mapOptions.detailedView}
        onChange={(e) => onDetailedView(e)} />
    </Setting>
  )
}
