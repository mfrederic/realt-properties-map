import { useCallback, useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { selectPropertyOccupations } from "../../store/filtering/filteringSelector";
import { useAppDispatch, useAppSelector } from "../../hooks/useInitStore";
import { setPropertyOccupations } from "../../store/filtering/filteringReducer";
import { useSmallScreen } from "../../hooks/useSmallScreen";
import { RangeSlider } from "../Common/Inputs/RangeSlider";
import { analyticsEvent } from "../../services/analytics";

const marks = [
  { value: 0, label: '0%' },
  { value: 50, label: '50%' },
  { value: 100, label: '100%' },
];

export function PropertyOccupations() {
  const isSmallScreen = useSmallScreen();
  const { t } = useTranslation('common', { keyPrefix: 'filtering' });
  const dispatch = useAppDispatch();
  const propertyOccupations = useAppSelector(selectPropertyOccupations);
  const [localValue, setLocalValue] = useState<[number, number]>([propertyOccupations.min, propertyOccupations.max]);
  
  useEffect(() => {
    setLocalValue([propertyOccupations.min, propertyOccupations.max]);
  }, [propertyOccupations]);

  const onPropertyOccupations = useCallback(([min, max]: [number | undefined, number | undefined]) => {
    setLocalValue([min ?? propertyOccupations.min, max ?? propertyOccupations.max]);
  }, [propertyOccupations]);

  const onChangeEnd = useCallback(([min, max]: [number | undefined, number | undefined]) => {
    analyticsEvent({
      category: 'Filtering',
      action: 'Property Occupations',
      label: `${min} - ${max}`,
    });
    
    const newOccupations = {
      min: min ?? propertyOccupations.min,
      max: max ?? propertyOccupations.max,
    };
    dispatch(setPropertyOccupations(newOccupations));
  }, [dispatch, propertyOccupations]);

  return (
    <RangeSlider
      textlabel={t('propertyOccupations.range') + ' (%)'}
      value={localValue}
      labelAlwaysOn
      marks={marks}
      min={0}
      max={100}
      minRange={0}
      size={isSmallScreen ? 'xl' : 'md'}
      onChange={onPropertyOccupations}
      onChangeEnd={onChangeEnd}
    />
  );
}