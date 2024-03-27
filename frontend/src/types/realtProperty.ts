import { Maybe } from "./global";

export interface Coordinates {
  lat: number;
  lng: number;
}

export interface SecondaryMarketplace {
  UniswapV1: boolean;
  UniswapV2: number;
}

export interface Marketplace {
  chainId: number;
  chainName: string;
  dexName: string;
  contractPool: string;
}

export interface BlockchainAddresses {
  ethereum: BlockchainAddress;
  xDai: BlockchainAddressXDai;
  goerli: BlockchainAddressGoerli;
}

export interface BlockchainAddress {
  chainName: string;
  chainId: number;
  contract: string;
  distributor: string;
  maintenance: string;
}

export interface BlockchainAddressXDai extends BlockchainAddress {
  rmmPoolAddress: number;
  rmmV3WrapperAddress: number;
  chainlinkPriceContract: number;
}

export interface BlockchainAddressGoerli extends BlockchainAddressXDai {}

export interface DateTime {
  date: string;
  timezone_type: number;
  timezone: string;
}

export interface RealToken {
  fullName: string;
  shortName: string;
  symbol: string;
  productType: string;
  tokenPrice: number;
  canal: string;
  currency: string;
  totalTokens: number;
  totalTokensRegSummed: number;
  uuid: string;
  ethereumContract: string;
  xDaiContract: Maybe<string>;
  gnosisContract: Maybe<string>;
  goerliContract: Maybe<string>;
  totalInvestment: number;
  grossRentYear: number;
  grossRentMonth: number;
  propertyManagement: number;
  propertyManagementPercent: number;
  realtPlatform: number;
  realtPlatformPercent: number;
  insurance: number;
  propertyTaxes: number;
  utilities: number;
  initialMaintenanceReserve: number;
  netRentDay: number;
  netRentMonth: number;
  netRentYear: number;
  netRentDayPerToken: number;
  netRentMonthPerToken: number;
  netRentYearPerToken: number;
  annualPercentageYield: number;
  coordinate: Coordinates;
  marketplaceLink: string;
  imageLink: Array<string>;
  propertyType: number;
  propertyTypeName: string;
  squareFeet: number;
  lotSize: number;
  bedroomBath: string;
  hasTenants: boolean;
  rentedUnits: number;
  totalUnits: number;
  termOfLease: Maybe<string>;
  renewalDate: null;
  section8paid: number;
  subsidyStatus: string;
  subsidyStatusValue: Maybe<number>;
  subsidyBy: Maybe<string>;
  sellPropertyTo: string;
  secondaryMarketplace: SecondaryMarketplace;
  secondaryMarketplaces: Array<Marketplace>;
  blockchainAddresses: BlockchainAddresses;
  underlyingAssetPrice: number;
  renovationReserve: Maybe<number>;
  propertyMaintenanceMonthly: number;
  rentStartDate: DateTime;
  lastUpdate: DateTime;
  originSecondaryMarketplaces: Array<Marketplace>;
  initialLaunchDate: DateTime;
  seriesNumber: number;
  constructionYear: number;
  constructionType: Maybe<string>;
  roofType: Maybe<string>;
  assetParking: Maybe<string>;
  foundation: Maybe<string>;
  heating: Maybe<string>;
  cooling: Maybe<string>;
  tokenIdRules: number;
  rentCalculationType: string;
  realtListingFeePercent: Maybe<number>;
  realtListingFee: Maybe<number>;
  miscellaneousCosts: Maybe<number>;
  propertyStories: Maybe<number>;
  rentalType: string;
  neighborhood: string;
}