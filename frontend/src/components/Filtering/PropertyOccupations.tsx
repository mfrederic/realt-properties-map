import { NumberInput } from "@mantine/core";
import { useTranslation } from "react-i18next";
import { useMediaQuery } from "@mantine/hooks";
import { selectPropertyOccupations } from "../../store/filtering/filteringSelector";
import { useAppDispatch, useAppSelector } from "../../hooks/useInitStore";
import { setPropertyOccupations } from "../../store/filtering/filteringReducer";

export function PropertyOccupations() {
  const mediaQuerySize = useMediaQuery('(max-width: 768px)') ? 'xl' : 'md';
  const { t } = useTranslation('common', { keyPrefix: 'filtering' });

  const dispatch = useAppDispatch();
  const propertyOccupations = useAppSelector(selectPropertyOccupations);

  function onPropertyOccupations(min?: number, max?: number) {
    const newOccupations = {
      min: min ?? propertyOccupations.min,
      max: max ?? propertyOccupations.max,
    };
    dispatch(setPropertyOccupations(newOccupations));
  }

  return <>
    <NumberInput
      id="propertyOccupations.min"
      label={t('propertyOccupations.min') + ' (%)'}
      value={propertyOccupations.min}
      min={0}
      max={propertyOccupations.max}
      allowDecimal={false}
      size={mediaQuerySize}
      onChange={(e) => onPropertyOccupations(e as number)}
    />
    <NumberInput
      id="propertyOccupations.max"
      label={t('propertyOccupations.max') + ' (%)'}
      value={propertyOccupations.max}
      min={propertyOccupations.min}
      max={100}
      allowDecimal={false}
      size={mediaQuerySize}
      onChange={(e) => onPropertyOccupations(undefined, e as number)}
    />
  </>
}