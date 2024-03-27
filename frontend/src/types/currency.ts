export enum Currency {
  USD = 'USD',
  EUR = 'EUR',
  CHF = 'CHF',
  XDAI = 'XDAI',
}

export enum CurrencySymbol {
  USD = '$',
  EUR = '€',
  CHF = 'CHF',
  XDAI = 'xDAI',
}

export interface CurrencyRates {
  XdaiUsd: number
  EurUsd: number
  ChfUsd: number
}

export enum PriceFeedContract {
  XDAI_USD = '0x678df3415fc31947dA4324eC63212874be5a82f8',
  EUR_USD = '0xab70BCB260073d036d1660201e9d5405F5829b7a',
  CHF_USD = '0xFb00261Af80ADb1629D3869E377ae1EEC7bE659F',
}