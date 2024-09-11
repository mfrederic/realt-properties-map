import { useTranslation } from "react-i18next";
import { useAppSelector } from "../../hooks/useInitStore";
import { selectDifferentiateOwned } from "../../store/mapOptions/mapOptionsSelector";
import { Property } from "../../types/property";
import { selectedLanguage } from "../../store/settings/settingsSelector";
import { useCurrencyValue } from "../../hooks/useCurrencyValue";
import date from "../../utils/date";
import { Divider, Grid } from "@mantine/core";

function toFixedStr(value: number, precision: number = 2) {
  return value.toFixed(precision).toLowerCase();
}

export function PropertyPanelContent({
  property,
}: {
  property: Property;
}) {
  const { t } = useTranslation('common');
  const language = useAppSelector(selectedLanguage);
  const differentiateOwned = useAppSelector(selectDifferentiateOwned);

  const {
    netRentYearPerToken,
    netRentDayPerToken,
    ownedAmount,
    tokenPrice,
    rentedUnits,
    totalUnits,
    totalTokens,
    annualPercentageYield,
    totalInvestment,
    rentStartDate,
    rentalType,
    initialLaunchDate,
  } = property;

  const consolidatedOwnedAmount = ownedAmount === 0 ? 1 : ownedAmount;
  const yearlyRent = netRentYearPerToken * consolidatedOwnedAmount;
  const dailyRent = netRentDayPerToken * consolidatedOwnedAmount;
  const ownedAmountPrice = ownedAmount * tokenPrice;
  const rentedUnitsPercent = rentedUnits * 100 / totalUnits;

  const entries = [
    {
      icon: property.icon,
      ownedOnly: false,
      entry: {
        label: 'propertyPanel.propertyType',
        value: t(`propertyType.${property.propertyType}`),
      },
    },
    {
      ownedOnly: true,
      entry: { label: 'propertyPanel.ownedAmount', value: useCurrencyValue(ownedAmountPrice) },
    },
    {
      ownedOnly: true,
      entry: { label: 'propertyPanel.token', value: `${ownedAmount} / ${totalTokens}` },
    },
    {
      ownedOnly: false,
      notOwnedOnly: true,
      entry: { label: 'propertyPanel.tokenAmount', value: totalTokens },
    },
    {
      ownedOnly: false,
      entry: { label: 'propertyPanel.yield', value: `${toFixedStr(annualPercentageYield)}%` },
    },
    {
      ownedOnly: false,
      entry: { label: 'propertyPanel.weeklyRent', value: useCurrencyValue(dailyRent * 7) },
    },
    {
      ownedOnly: false,
      entry: { label: 'propertyPanel.yearlyRent', value: useCurrencyValue(yearlyRent) },
    },
    {
      ownedOnly: false,
      entry: { label: 'propertyPanel.rentedUnit', value: `${rentedUnits} / ${totalUnits} (${toFixedStr(rentedUnitsPercent)}%)` },
    },
    {
      ownedOnly: false,
      entry: { label: 'propertyPanel.initialLaunchDate', value: date.utc(initialLaunchDate.date).locale(language).format('LL') },
    },
    {
      ownedOnly: false,
      entry: { label: 'propertyPanel.rentStart', value: date.utc(rentStartDate.date).locale(language).format('LL') },
    },
    {
      ownedOnly: false,
      entry: { label: 'propertyPanel.rentalType', value: t(`rentalType.${rentalType}`) },
    },
    {
      ownedOnly: false,
      entry: { label: 'propertyPanel.assetPrice', value: useCurrencyValue(totalInvestment) },
    },
  ];

  return (
    <>
      {
        (ownedAmount === 0 || !differentiateOwned) &&
        <Grid className="px-4 py-2 bg-gray-500 text-white">
          <Grid.Col span={12} className="font-semibold">
            <h2>{t('propertyPanel.notOwned')}</h2>
          </Grid.Col>
        </Grid>
      }
      {entries.map(({ ownedOnly, notOwnedOnly, entry, icon }) => {
        if (
          (ownedOnly && ownedAmount <= 0) ||
          (ownedOnly && !differentiateOwned) ||
          (notOwnedOnly && ownedAmount > 0)
        ) {
          return null;
        }
        return (
          <Grid key={entry.label} className="px-4 py-2">
            <Grid.Col span={6} className="font-semibold">
              <h2>{t(entry.label)}</h2>
            </Grid.Col>
            <Grid.Col span={6} className="flex items-center justify-end">
              <p className="flex items-center">
                {
                  icon &&
                  <i className="material-icons max-w-[40px] mr-2">{icon}</i>
                }
                {entry.value}
              </p>
            </Grid.Col>
            <Divider />
          </Grid>
        );
      })}
    </>
  )
}