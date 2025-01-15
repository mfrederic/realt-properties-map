import { useMemo } from "react";
import { useTranslation as useTranslationI18n, UseTranslationOptions } from "react-i18next";

export function useTranslation(
  ns = 'common',
  options?: UseTranslationOptions<any> | undefined
) {
  const translation = useTranslationI18n(ns, options);
  return useMemo(() => translation, [translation]);
}