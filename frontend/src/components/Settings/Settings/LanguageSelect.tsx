import LanguageIcon from '@mui/icons-material/Language';
import { useAppDispatch, useAppSelector } from "../../../hooks/useInitStore";
import { selectedLanguage } from "../../../store/settings/settingsSelector";
import { setLanguage } from "../../../store/settings/settingsReducer";
import { useTranslation } from "react-i18next";
import { Language } from "../../../types/language";
import { analyticsEvent } from "../../../services/analytics";
import { Select } from "../../Common/Inputs/Select";
import { useSmallScreen } from '../../../hooks/useSmallScreen';
import { Kbds } from '../../Common/Kbds';

export function LanguageSelect() {
  const { i18n, t } = useTranslation('common', { keyPrefix: 'settings' });
  const isSmallScreen = useSmallScreen();
  
  const dispatch = useAppDispatch();
  const userLanguage = useAppSelector(selectedLanguage);

  function setUserLanguage(lang: string | null) {
    const languageEnum = lang as Language;
    if (i18n.language === languageEnum) {
      return;
    }
    analyticsEvent({
      category: 'Settings',
      action: 'Set Language',
      label: languageEnum,
    });
    dispatch(setLanguage(languageEnum));
    i18n.changeLanguage(languageEnum);
  }

  return (
    <Select
      allowDeselect={false}
      className="w-full"
      label={t('language')}
      p={5}
      value={userLanguage}
      onChange={setUserLanguage}
      data={[
        { value: Language.EN, label: t('english') },
        { value: Language.FR, label: t('french') },
        { value: Language.ES, label: t('spanish') },
      ]}
      leftSection={
        <LanguageIcon />
      }
      rightSection={
        isSmallScreen ? null : (
          <Kbds hotkey="mod+L" />
        )
      }
      rightSectionWidth={isSmallScreen ? undefined : 100}
    />
  )
}