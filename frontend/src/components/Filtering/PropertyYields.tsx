import { useCallback, useState, useEffect } from "react";  
import { useSmallScreen } from "../../hooks/useSmallScreen";
import { selectPropertyYields } from "../../store/filtering/filteringSelector";
import { useAppDispatch, useAppSelector } from "../../hooks/useInitStore";
import { setPropertyYields } from "../../store/filtering/filteringReducer";
import { RangeSlider } from "../Common/Inputs/RangeSlider";
import { analyticsEvent } from "../../services/analytics";
import { useTranslation } from "../../hooks/useTranslation";

const marks = [
  { value: 0, label: '0%' },
  { value: 10, label: '10%' },
  { value: 20, label: '20%+' },
];

export function PropertyYields() {
  const isSmallScreen = useSmallScreen();
  const { t } = useTranslation('common', { keyPrefix: 'filtering' });
  const dispatch = useAppDispatch();
  const propertyYields = useAppSelector(selectPropertyYields);
  const [localValue, setLocalValue] = useState<[number, number]>([propertyYields.min ?? 0, propertyYields.max ?? 20]);

  useEffect(() => {
    setLocalValue([propertyYields.min ?? 0, propertyYields.max ?? 20]);
  }, [propertyYields]);

  const onChange = useCallback(([min, max]: [number | undefined, number | undefined]) => {
    setLocalValue([min ?? propertyYields.min ?? 0, max ?? propertyYields.max ?? 20]);
  }, [propertyYields]);

  const onChangeEnd = useCallback(([min, max]: [number | undefined, number | undefined]) => {
    analyticsEvent({
      category: 'Filtering',
      action: 'Property Yields',
      label: `${min} - ${max}`,
    });
    
    const newYields = {
      min: min ?? propertyYields.min ?? 0,
      max: max as unknown as string === '' ? undefined : max ?? propertyYields.max ?? undefined,
    };
    dispatch(setPropertyYields(newYields));
  }, [dispatch, propertyYields]);

  return (
    <RangeSlider
      textlabel={t('propertyYields.range') + ' (%)'}
      value={localValue}
      labelAlwaysOn
      marks={marks}
      min={0}
      max={20}
      minRange={0}
      size={!isSmallScreen ? 'md' : 'xl'}
      onChange={onChange}
      onChangeEnd={onChangeEnd}
    />
  );
}