import { useTranslation } from "react-i18next";
import { Divider, Title } from "@mantine/core";
import { useAppSelector } from "../../hooks/useInitStore";
import { selectDifferentiateOwned } from "../../store/mapOptions/mapOptionsSelector";
import { Property } from "../../types/property";
import { selectedLanguage } from "../../store/settings/settingsSelector";
import { useCurrencyValue } from "../../hooks/useCurrencyValue";
import date from "../../utils/date";
import { getPropertyTypeName } from "../../services/realtokens";
import './propertyPanelContent.scss';
import { Grid } from "../Common/Layouts/Grid";

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
      iconClass: `${getPropertyTypeName(property.propertyType)}-icon`,
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
      rentClass: `${property.iconColorClass}-property`,
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
    <Grid className="px-4 py-2">
      {
        (ownedAmount === 0 || !differentiateOwned) &&
        <Grid.Col span={12} className="font-semibold bg-gray-500 text-white">
          <Title order={5}>{t('propertyPanel.notOwned')}</Title>
        </Grid.Col>
      }
      {entries
      .filter(( entry ) => !((entry.ownedOnly && ownedAmount <= 0) ||
          (entry.ownedOnly && !differentiateOwned) ||
          (entry.notOwnedOnly && ownedAmount > 0)))
      .map(({ entry, icon, rentClass, iconClass }) => {
        return (
          <Grid.Col key={entry.label} span={12}>
            <Grid>
              <Grid.Col span={6} className="font-semibold">
                <Title order={5}>{t(entry.label)}</Title>
              </Grid.Col>
              <Grid.Col span={6} className="flex items-center justify-end">
                <p className={`flex items-center ${rentClass ? rentClass : ''} ${iconClass ? iconClass : ''}`}>
                  {
                    icon &&
                    <i className="material-icons max-w-[40px] mr-2">{icon}</i>
                  }
                  {entry.value}
                </p>
              </Grid.Col>
              <Divider />
            </Grid>
          </Grid.Col>
        );
      })}
    </Grid>
  )
}