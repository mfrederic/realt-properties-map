import { useTranslation } from "react-i18next";
import { useMantineColorScheme } from "@mantine/core";
import { useHotkeys } from "@mantine/hooks";
import { setCurrency, setLanguage } from "../store/settings/settingsReducer";
import { Language } from "../types/language";
import { Currency } from "../types/currency";
import { useAppDispatch, useAppSelector } from "../hooks/useInitStore";
import { selectedCurrency, selectedLanguage } from "../store/settings/settingsSelector";
import { selectDisplayAll } from "../store/filtering/filteringSelector";
import { setDisplayAll } from "../store/filtering/filteringReducer";

const languages = Object.entries(Language);
const currencies = Object.entries(Currency);

export function HotkeysProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const { i18n } = useTranslation();
  const { toggleColorScheme } = useMantineColorScheme();

  const dispatch = useAppDispatch();
  const userLanguage = useAppSelector(selectedLanguage);
  const userCurrency = useAppSelector(selectedCurrency);
  const displayAll = useAppSelector(selectDisplayAll);

  useHotkeys([
    ['mod+T', () => toggleColorScheme()],
    ['mod+L', () => {
      const userLanguageIndex = languages.findIndex(([_, lang]) => lang === userLanguage);
      const nextLanguage = languages[(userLanguageIndex + 1) % languages.length];
      dispatch(setLanguage(nextLanguage[1]));
      i18n.changeLanguage(nextLanguage[1]);
    }],
    ['mod+M', () => {
      const userCurrencyIndex = currencies.findIndex(([_, currency]) => currency === userCurrency);
      const nextCurrency = currencies[(userCurrencyIndex + 1) % currencies.length];
      dispatch(setCurrency(nextCurrency[1]));
    }],
    ['mod+O', () => {
      dispatch(setDisplayAll(!displayAll));
    }]
  ]);

  return (
    <>
      {children}
    </>
  )
}