import { Select } from "@mantine/core";
import LanguageIcon from '@mui/icons-material/Language';
import { useAppDispatch, useAppSelector } from "../../../hooks/useInitStore";
import { selectedLanguage } from "../../../store/settings/settingsSelector";
import { setLanguage } from "../../../store/settings/settingsReducer";
import { useTranslation } from "react-i18next";
import { Language } from "../../../types/language";

export function LanguageSelect() {
  const { i18n, t } = useTranslation('common', { keyPrefix: 'settings' });
  const dispatch = useAppDispatch();
  const userLanguage = useAppSelector(selectedLanguage);

  function setUserLanguage(lang: Language) {
    if (i18n.language === lang) {
      return;
    }
    dispatch(setLanguage(lang));
    i18n.changeLanguage(lang);
  }

  return (
    <Select
      allowDeselect={false}
      className="w-full"
      label={t('language')}
      p={5}
      value={userLanguage}
      onChange={(value) => setUserLanguage(value as Language)}
      data={[
        { value: Language.EN, label: t('english') },
        { value: Language.FR, label: t('french') },
      ]}
      leftSection={
        <LanguageIcon />
      }
    />
  )
}