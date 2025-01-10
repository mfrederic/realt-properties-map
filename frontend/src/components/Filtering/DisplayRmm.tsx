import { useTranslation } from "react-i18next";
import { CheckboxProps } from "@mantine/core";
import EngineeringIcon from '@mui/icons-material/Engineering';
import { Option } from "../Settings/Settings/Option";
import { useAppDispatch, useAppSelector } from "../../hooks/useInitStore";
import { selectWalletAddresses } from "../../store/settings/settingsSelector";
import { selectFiltering } from "../../store/filtering/filteringSelector";
import { analyticsEvent } from "../../services/analytics";
import { setDisplayRmm } from "../../store/filtering/filteringReducer";

export function DisplayRmm() {
  const { t: tMapOptions } = useTranslation('common', { keyPrefix: 'mapOptions' });
  
  const dispatch = useAppDispatch();
  const filteringOptions = useAppSelector(selectFiltering);
  const walletAddresses = useAppSelector(selectWalletAddresses);
  const rmmDisabled = true;
  
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

  const ExpectedFeature: CheckboxProps['icon'] = ({ ...props }) => <EngineeringIcon {...props} />;

  return (
    <Option
      id="rmm"
      label={tMapOptions('displayRmm')}
      icon={ExpectedFeature}
      checked={filteringOptions.displayRmm || rmmDisabled}
      disabled={walletAddresses.length === 0 || rmmDisabled}
    onChange={(e) => onDisplayRmm(e)} />
  )
}