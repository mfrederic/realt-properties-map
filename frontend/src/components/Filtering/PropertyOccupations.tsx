import { useTranslation } from "react-i18next";
import { selectPropertyOccupations } from "../../store/filtering/filteringSelector";
import { useAppDispatch, useAppSelector } from "../../hooks/useInitStore";
import { setPropertyOccupations } from "../../store/filtering/filteringReducer";
import { useSmallScreen } from "../../hooks/useSmallScreen";
import { RangeSlider } from "../Common/Inputs/RangeSlider";
import { analyticsEvent } from "../../services/analytics";

export function PropertyOccupations() {
  const isSmallScreen = useSmallScreen();
  const { t } = useTranslation('common', { keyPrefix: 'filtering' });

  const dispatch = useAppDispatch();
  const propertyOccupations = useAppSelector(selectPropertyOccupations);

  function onPropertyOccupations(min?: number, max?: number) {
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
  }

  return <>
    <RangeSlider
      textLabel={t('propertyOccupations.range') + ' (%)'}
      value={[propertyOccupations.min, propertyOccupations.max]}
      min={0}
      max={100}
      minRange={0}
      size={isSmallScreen ? 'xl' : 'md'}
      onChange={(e) => onPropertyOccupations(e[0] as number, e[1] as number)}
    />
  </>
}