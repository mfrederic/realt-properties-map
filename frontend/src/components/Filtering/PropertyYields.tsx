import { NumberInput } from "@mantine/core";
import { useTranslation } from "react-i18next";
import { useSmallScreen } from "../../hooks/useSmallScreen";
import { selectPropertyYields } from "../../store/filtering/filteringSelector";
import { useAppDispatch, useAppSelector } from "../../hooks/useInitStore";
import { setPropertyYields } from "../../store/filtering/filteringReducer";

export function PropertyYields() {
  const isSmallScreen = useSmallScreen();
  const { t } = useTranslation('common', { keyPrefix: 'filtering' });

  const dispatch = useAppDispatch();
  const propertyYields = useAppSelector(selectPropertyYields);

  function onPropertyYields(min?: number, max?: number) {
    const newYields = {
      min: min ?? propertyYields.min ?? 0,
      max: max as unknown as string === ''
        ? undefined
        : max ?? propertyYields.max ?? undefined,
    };
    dispatch(setPropertyYields(newYields));
  }

  return <>
    <NumberInput
      id="propertyYields.min"
      label={t('propertyYields.min') + ' (%)'}
      value={propertyYields.min}
      min={0}
      max={propertyYields.max ?? undefined}
      allowDecimal={false}
      size={!isSmallScreen ? 'md' : 'xl'}
      onChange={(e) => onPropertyYields(e as number)}
    />
    <NumberInput
      id="propertyYields.max"
      label={t('propertyYields.max') + ' (%)'}
      value={propertyYields.max ?? undefined}
      min={propertyYields.min}
      max={100}
      allowDecimal={false}
      size={!isSmallScreen ? 'md' : 'xl'}
      onChange={(e) => onPropertyYields(undefined, e as number)}
    />
  </>
}