import { useEffect } from "react";
import { setDisplayGnosis, setDisplayRmm } from "../../store/filtering/filteringReducer";
import { useTranslation } from "react-i18next";
import { CheckboxProps } from "@mantine/core";
import MapIcon from '@mui/icons-material/Map';
import EngineeringIcon from '@mui/icons-material/Engineering';
import { useAppSelector } from "../../hooks/useInitStore";
import { useAppDispatch } from "../../hooks/useInitStore";
import { setDisplayAll } from "../../store/filtering/filteringReducer";
import { selectWalletAddresses } from "../../store/settings/settingsSelector";
import { analyticsEvent } from "../../services/analytics";
import { SettingsPanelSection } from "../Settings/SettingsPanelSection";
import { Option } from "../Settings/Settings/Option";
import { selectFiltering } from "../../store/filtering/filteringSelector";
import { useMediaQuery } from "@mantine/hooks";

export function FilteringOptions() {
  const { t: tMapOptions } = useTranslation('common', { keyPrefix: 'mapOptions' });
  const { t: tFiltering } = useTranslation('common', { keyPrefix: 'filtering' });

  const dispatch = useAppDispatch();
  const walletAddresses = useAppSelector(selectWalletAddresses);
  const filteringOptions = useAppSelector(selectFiltering);
  
  const rmmDisabled = true;

  useEffect(() => {
    if (walletAddresses.length === 0) {
      dispatch(setDisplayAll(true));
    }
  }, []);

  function onDisplayRmm(toggle: boolean) {
    if (rmmDisabled) {
      return;
    }
    analyticsEvent({
      category: 'Settings',
      action: 'Display RMM',
      label: toggle ? 'On' : 'Off',
    });
    dispatch(setDisplayRmm(toggle));
  }

  function onDisplayGnosis(toggle: boolean) {
    analyticsEvent({
      category: 'Settings',
      action: 'Display Gnosis',
      label: toggle ? 'On' : 'Off',
    });
    dispatch(setDisplayGnosis(toggle));
  }

  function onDisplayAll(toggle: boolean) {
    analyticsEvent({
      category: 'Settings',
      action: 'Display All',
      label: toggle ? 'On' : 'Off',
    });
    dispatch(setDisplayAll(toggle));
  }
  
  const ExpectedFeature: CheckboxProps['icon'] = ({ ...props }) => <EngineeringIcon {...props} />;

  return (
    <>
      <SettingsPanelSection icon={<MapIcon className="inline-block mr-2" />} label={tFiltering('filteringOptions')}>
        <Option
          id="rmm"
          label={tMapOptions('displayRmm')}
          icon={ExpectedFeature}
          checked={filteringOptions.displayRmm || rmmDisabled}
          disabled={walletAddresses.length === 0 || rmmDisabled}
          onChange={(e) => onDisplayRmm(e)} />
        <Option
          id="gnosis"
          label={tMapOptions('displayGnosis')}
          checked={filteringOptions.displayGnosis}
          disabled={walletAddresses.length === 0}
          onChange={(e) => onDisplayGnosis(e)} />
        <Option
          id="all"
          label={tMapOptions('displayAll')}
          checked={filteringOptions.displayAll}
          disabled={walletAddresses.length === 0}
          onChange={(e) => onDisplayAll(e)} />
      </SettingsPanelSection>
    </>
  )
}