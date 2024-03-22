import { Property } from "../../types/property";

function toFixedStr(value: number, precision: number = 2) {
  return value.toFixed(precision).toLowerCase();
}

function toCurrency(value: number, currency: string = 'USD') {
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency,
  });
  return formatter.format(value);
}

export function propertyTooltip({
  fullName,
  shortName,
  currency,
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
}: Property, detailed: boolean) {
  const yearlyRent = netRentYearPerToken * ownedAmount;
  const dailyRent = netRentDayPerToken * ownedAmount;
  const ownedAmountPrice = ownedAmount * tokenPrice;
  const rentedUnitsPercent = rentedUnits * 100 / totalUnits;

  const entries = [
    {
      ownedOnly: true,
      detailedOnly: false,
      entry: { label: 'Owned amount', value: toCurrency(ownedAmountPrice, currency) },
    },
    {
      ownedOnly: true,
      detailedOnly: false,
      entry: { label: 'Token', value: `${ownedAmount} / ${totalTokens}` },
    },
    {
      ownedOnly: false,
      notOwnedOnly: true,
      detailedOnly: false,
      entry: { label: 'Token amount', value: totalTokens },
    },
    {
      ownedOnly: true,
      detailedOnly: false,
      entry: { label: 'Rendement', value: `${toFixedStr(annualPercentageYield)}%` },
    },
    {
      ownedOnly: true,
      detailedOnly: false,
      entry: { label: 'Weekly rent', value: toCurrency(dailyRent * 7, currency) },
    },
    {
      ownedOnly: true,
      detailedOnly: false,
      entry: { label: 'Yearly rent', value: toCurrency(yearlyRent, currency) },
    },
    {
      ownedOnly: false,
      detailedOnly: false,
      entry: { label: 'Rented unit', value: `${rentedUnits} / ${totalUnits} (${toFixedStr(rentedUnitsPercent)}%)` },
    },
    {
      ownedOnly: false,
      detailedOnly: true,
      entry: { label: 'Asset price', value: toCurrency(totalInvestment, currency) },
    },
  ];

  const items = entries
    .filter(({ ownedOnly, notOwnedOnly, detailedOnly }) => {
      if (ownedOnly && ownedAmount <= 0) {
        return false;
      }
      if (notOwnedOnly && ownedAmount > 0) {
        return false;
      }
      if (detailedOnly && !detailed) {
        return false;
      }
      return true;
    })
    .map(({ entry }) => entry);

  const title = detailed
    ? shortName
    : `<a
    class="col-span-full"
    href="${marketplaceLink}"
    target="_blank"
    rel="noreferrer"
    title="View on RealT">${shortName}</a>`;
  const actions = detailed
    ? `<a
    class="col-span-full"
    href="${marketplaceLink}"
    target="_blank"
    rel="noreferrer"
    title="View on RealT">${fullName}</a>`
    : undefined;

  return `
  <div class="text-sm sm:text-base">
    ${ ownedAmount <= 0 ? `<div class="px-2 py-1 sm:py-2 font-bold text-center text-red-500">Not owned</div>` : ''}
    ${ detailed ? `<img src="${imageLink[0]}" alt="${fullName}" />` : '' }
    ${ title ? `<div class="px-2 mb-1">
      <h3 class="font-semibold leading-7 text-gray-900">${ title }</h3>
    </div>` : '' }
    <div class="border-t border-gray-100">
      <dl class="divide-y divide-gray-100">
        ${
          items.map((item, index) => (
            `<div key=${index} class="px-2 py-1 sm:py-2 grid grid-cols-12">
              <dt class="font-medium leading-6 text-gray-900 col-span-5">${ item.label }</dt>
              <dd class="mt-1 text-right leading-6 text-gray-700 col-span-7 mt-0">${ item.value }</dd>
            </div>`
          )).join('')
        }
      </dl>
    </div>
    ${
      actions ? 
      `<div class="px-2 py-1 sm:py-2 grid grid-cols-12">${actions}</div>` : ''
    }
  </div>
  `;
}