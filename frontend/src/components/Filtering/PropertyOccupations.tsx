import { NumberInput } from "@mantine/core";
import { useTranslation } from "react-i18next";
import { selectPropertyOccupations } from "../../store/filtering/filteringSelector";
import { useAppDispatch, useAppSelector } from "../../hooks/useInitStore";
import { setPropertyOccupations } from "../../store/filtering/filteringReducer";
import { useSmallScreen } from "../../hooks/useSmallScreen";

export function PropertyOccupations() {
  const isSmallScreen = useSmallScreen();
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
      size={!isSmallScreen ? 'md' : 'xl'}
      onChange={(e) => onPropertyOccupations(e as number)}
    />
    <NumberInput
      id="propertyOccupations.max"
      label={t('propertyOccupations.max') + ' (%)'}
      value={propertyOccupations.max}
      min={propertyOccupations.min}
      max={100}
      allowDecimal={false}
      size={!isSmallScreen ? 'md' : 'xl'}
      onChange={(e) => onPropertyOccupations(undefined, e as number)}
    />
  </>
}