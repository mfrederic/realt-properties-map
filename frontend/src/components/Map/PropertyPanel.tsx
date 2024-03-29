import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Button, Divider, Drawer, Flex, Grid, Image } from "@mantine/core";
import { Carousel } from "@mantine/carousel";
import { AffixBtn } from "../Common/AffixBtn";
import { useAppDispatch, useAppSelector } from "../../hooks/useInitStore";
import { selectedMarker } from "../../store/marker/markerSelector";
import { clearSelected } from "../../store/marker/markerReducer";
import { Property } from "../../types/property";
import { useCurrencyValue } from "../../hooks/useCurrencyValue";
import date from "../../utils/date";
import { selectedLanguage } from "../../store/settings/settingsSelector";
import { selectDifferentiateOwned } from "../../store/mapOptions/mapOptionsSelector";
import { useElementSize } from "@mantine/hooks";

function toFixedStr(value: number, precision: number = 2) {
  return value.toFixed(precision).toLowerCase();
}

export function PropertyPanel() {
  const dispatch = useAppDispatch();
  const property = useAppSelector(selectedMarker);

  useEffect(() => {
    if (property) {
      return;
    }
    document
      .querySelectorAll('.marker-svg.selected')
      .forEach((el) => el.classList.remove('selected'));
  }, [property]);

  function onClose() {
    dispatch(clearSelected());
  }

  return (
    <>
      {
        property &&
        <Drawer.Root opened={true} onClose={onClose} position="left">
          <Drawer.Content>
            <PropertyPanelContent property={property} onClose={onClose} />
          </Drawer.Content>
        </Drawer.Root>
      }
    </>
  )
}

export function PropertyPanelContent({
  property,
  onClose,
}: {
  property: Property;
  onClose: () => void;
}) {
  const { ref, height } = useElementSize();
  const { t } = useTranslation('common');
  const language = useAppSelector(selectedLanguage);
  const differentiateOwned = useAppSelector(selectDifferentiateOwned);

  const {
    fullName,
    netRentYearPerToken,
    netRentDayPerToken,
    ownedAmount,
    tokenPrice,
    rentedUnits,
    totalUnits,
    imageLink,
    totalTokens,
    annualPercentageYield,
    marketplaceLink,
    totalInvestment,
    rentStartDate,
    rentalType,
    initialLaunchDate,
    neighborhood,
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
        value: property.propertyTypeName
          ? t(`propertyType.${property.propertyType}`)
          : t('propertyType.unknown'),
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
      <Drawer.Header className="!p-0 !mb-4">
        <Grid>
          {
            imageLink.length > 0 &&
            <Grid.Col span={12}>
              <Carousel height={height ?? 290}>
                {
                  imageLink.map((link, index) => (
                    <Carousel.Slide key={index}>
                      <Image fit="contain" src={link} alt={fullName} ref={index === 0 ? ref : undefined} />
                    </Carousel.Slide>
                  ))
                }
              </Carousel>
            </Grid.Col>
          }
          <Grid.Col span={12}>
            <Drawer.Title className="!mb-4">
              <Flex align="start" direction="column" className="px-4">
                <strong>{fullName}</strong>
                {neighborhood && <small>{neighborhood}</small>}
              </Flex>
            </Drawer.Title>
            <Drawer.Title>
              <Grid className="px-4">
                <Grid.Col span={{
                  base: 6,
                  md: 4,
                }}>
                  <Button
                    variant="default"
                    fullWidth
                    component="a"
                    title={t('title.viewOnRealT')}
                    target="_blank"
                    referrerPolicy="no-referrer"
                    href={marketplaceLink}>
                    RealT
                  </Button>
                </Grid.Col>
                <Grid.Col span={{
                  base: 6,
                  md: 4,
                }}>
                  <Button
                    variant="default"
                    fullWidth
                    component="a"
                    title={t('title.viewOnRealtoken')}
                    target="_blank"
                    referrerPolicy="no-referrer"
                    href={"https://dashboard.realt.community/asset/" + property.address}>
                    Dashboard
                  </Button>
                </Grid.Col>
                <Grid.Col span={{
                  base: 0,
                  md: 4,
                }}>
                  <AffixBtn defaultToPlain>
                    <Button
                      fullWidth
                      onClick={onClose}>
                      {t('actions.close')}
                    </Button>
                  </AffixBtn>
                </Grid.Col>
              </Grid>
            </Drawer.Title>
          </Grid.Col>
          <Grid.Col span={12}>
            <Divider />
          </Grid.Col>
        </Grid>
      </Drawer.Header>
      <Drawer.Body className="!p-0 mb-20 sm:mb-0">
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
      </Drawer.Body>
    </>
  )
}