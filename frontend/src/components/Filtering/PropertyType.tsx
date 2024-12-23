import { useAppSelector } from "../../hooks/useInitStore";
import { useTranslation } from "react-i18next";
import { analyticsEvent } from "../../services/analytics";
import { useAppDispatch } from "../../hooks/useInitStore";
import { selectPropertyTypes } from "../../store/filtering/filteringSelector";
import { ComboboxData, MultiSelect } from "@mantine/core";
import { setPropertyTypes } from "../../store/filtering/filteringReducer";
import { useMemo } from "react";
import { useMediaQuery } from "@mantine/hooks";

export function PropertyType() {
  const mediaQuerySize = useMediaQuery('(max-width: 768px)') ? 'xl' : 'md';
  const { t } = useTranslation('common', { keyPrefix: 'filtering' });
  const { t: tPropertyType } = useTranslation('common', { keyPrefix: 'propertyType' });
  const dispatch = useAppDispatch();
  const propertyTypes = useAppSelector(selectPropertyTypes);

  const data: ComboboxData = useMemo(() => [1, 2, 3, 4, 6, 8, 9, 10, 11, 12].map(type => ({
    value: type.toString(),
    label: tPropertyType(type.toString()),
  })), [tPropertyType]);

  function onPropertyTypes(value: string[]) {
    analyticsEvent({
      category: 'Settings',
      action: 'Property Types',
      label: value.join(', '),
    });
    dispatch(setPropertyTypes(value));
  }

  return (
    <MultiSelect
      id="propertyTypes"
      label={t('propertyTypes')}
      data={data}
      value={propertyTypes}
      size={mediaQuerySize}
      onChange={(e) => onPropertyTypes(e)} />
  )
}