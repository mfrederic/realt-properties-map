import { useTranslation } from "react-i18next";
import { useSmallScreen } from "../../hooks/useSmallScreen";
import { selectPropertyYields } from "../../store/filtering/filteringSelector";
import { useAppDispatch, useAppSelector } from "../../hooks/useInitStore";
import { setPropertyYields } from "../../store/filtering/filteringReducer";
import { RangeSlider } from "../Common/Inputs/RangeSlider";
import { analyticsEvent } from "../../services/analytics";

export function PropertyYields() {
  const isSmallScreen = useSmallScreen();
  const { t } = useTranslation('common', { keyPrefix: 'filtering' });

  const dispatch = useAppDispatch();
  const propertyYields = useAppSelector(selectPropertyYields);

  function onPropertyYields(min?: number, max?: number) {
    analyticsEvent({
      category: 'Filtering',
      action: 'Property Yields',
      label: `${min} - ${max}`,
    });
    const newYields = {
      min: min ?? propertyYields.min ?? 0,
      max: max as unknown as string === ''
        ? undefined
        : max ?? propertyYields.max ?? undefined,
    };
    dispatch(setPropertyYields(newYields));
  }

  return <>
    <RangeSlider
      textlabel={t('propertyYields.range') + ' (%)'}
      value={[propertyYields.min ?? 0, propertyYields.max ?? 20]}
      labelAlwaysOn
      marks={[
        { value: 0, label: '0%' },
        { value: 10, label: '10%' },
        { value: 20, label: '20%+' },
      ]}
      min={0}
      max={20}
      minRange={0}
      size={!isSmallScreen ? 'md' : 'xl'}
      onChange={(e) => onPropertyYields(e[0] as number, e[1] as number)}
    />
  </>
}