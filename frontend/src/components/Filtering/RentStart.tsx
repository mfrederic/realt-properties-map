import { Grid, SegmentedControlItem, Text } from "@mantine/core";
import { useSmallScreen } from "../../hooks/useSmallScreen";
import { SegmentedControl } from "../Common/Inputs/SegmentedControl";
import { useTranslation } from "react-i18next";
import { useAppSelector } from "../../hooks/useInitStore";
import { useAppDispatch } from "../../hooks/useInitStore";
import { selectRentStart } from "../../store/filtering/filteringSelector";
import { setRentStart } from "../../store/filtering/filteringReducer";
import { analyticsEvent } from "../../services/analytics";

export function RentStart() {
  const isSmallScreen = useSmallScreen();
  const { t } = useTranslation('common', { keyPrefix: 'filtering' });
  const dispatch = useAppDispatch();
  const rentStart = useAppSelector(selectRentStart);

  const data: SegmentedControlItem[] = ['past', 'all', 'future'].map((key) => ({
    value: key,
    label: t(`rentStartOptions.${key}`),
  }));

  function onRentStart(value: string) {
    analyticsEvent({
      category: 'Filtering',
      action: 'Rent Start',
      label: value,
    });
    dispatch(setRentStart(value as 'past' | 'all' | 'future'));
  }

  return (
    <Grid className="py-4">
      <Grid.Col>
      <Text size={!isSmallScreen ? 'md' : 'xl'} className="!mb-2">
        {t('rentStart')}
      </Text>
        <SegmentedControl
          fullWidth
          data={data}
          value={rentStart}
          onChange={onRentStart}
        />
    </Grid.Col>
    </Grid>
  )
}