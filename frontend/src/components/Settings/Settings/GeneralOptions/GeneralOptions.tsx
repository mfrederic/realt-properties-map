import { useTranslation } from "react-i18next";
import TuneIcon from '@mui/icons-material/Tune';
import { useAppDispatch, useAppSelector } from "../../../../hooks/useInitStore";
import { Option } from "../Option";
import { SettingsPanelSection } from "../../SettingsPanelSection";
import { selectedStartTooltip } from "../../../../store/settings/settingsSelector";
import { setStartTooltip } from "../../../../store/settings/settingsReducer";

export function GeneralOptions() {
  const { t } = useTranslation('common', { keyPrefix: 'settings.generalOptions' });
  const dispatch = useAppDispatch();
  const showStartTooltip = useAppSelector(selectedStartTooltip);

  function onToggleStartTooltip(toggle: boolean) {
    dispatch(setStartTooltip(toggle));
  }

  return (
    <SettingsPanelSection icon={<TuneIcon className="inline-block mr-2" />} label={t('title')}>
      <Option
        id="startTooltip"
        label={t('displayStartTooltip')}
        checked={showStartTooltip}
        onChange={(e) => onToggleStartTooltip(e)} />
    </SettingsPanelSection>
  )
}
