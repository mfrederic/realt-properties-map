import Env from "../utils/env";
import { httpRequester } from "./http";
import { Property } from "../types/property";
import { RealToken } from "../types/realtProperty";
import { Cache } from '../utils/cache';

const CACHE_KEY = 'realtokens_cache';

export async function getRealTokens(): Promise<{
  error?: boolean,
  realtokens: Array<RealToken>,
}> {
  const result = await Cache.fetch<Array<RealToken>>(
    CACHE_KEY,
    async () => {
      const http = httpRequester();
      const response = await http.get<Array<RealToken>>(`${Env.VITE_REALT_PROPERTIES_BACKEND_URL}properties`);
      if (!Array.isArray(response.data)) {
        throw new Error('Invalid response');
      }
      return response.data;
    },
  );

  return {
    error: result.error,
    realtokens: result.data,
  };
}

export function mapPropertiesList(
  realtProperties: Array<RealToken>,
): Map<string, Property> {
  return realtProperties
    .reduce((accu, property) => {
      if (!property.gnosisContract) {
        return accu;
      }
      accu.set(property.gnosisContract.toLowerCase(), {
        ...property,
        address: property.gnosisContract.toLowerCase(),
        caseSensitiveAddress: property.gnosisContract,
        isOld: property.fullName.startsWith('OLD-'),
        icon: setIcon(property.propertyType),
        iconColorClass: setIconColor(property.rentedUnits, property.totalUnits),
        ownedAmount: 0,
        source: null,
        ownerWallets: [],
        coordinates: property.coordinate,
      });
      return accu;
    }, new Map<string, Property>());
}

export function getPropertyTypeName(propertyType: number): string {
  switch (propertyType) {
    case 1:
      return 'singleFamily';
    case 2:
      return 'multiFamily';
    case 3:
      return 'duplex';
    case 4:
      return 'condominium';
    case 6:
      return 'mixedUse';
    case 8:
      return 'quadplex';
    case 9:
      return 'commercial';
    case 10:
      return 'sfrPortfolio';
    case 11:
      return 'mfrPortfolio';
    case 12:
      return 'loan';
    default:
      return 'stack';
  }
}

function setIcon(propertyType: number): string {
  switch (propertyType) {
    case 1: // Single Family
      return 'home';
    case 2: // Multi Family
      return 'domain';
    case 3: // Duplex
      return 'group';
    case 4: // Condominium
      return 'beach_access';
    case 6: // Mixed-Use
      return 'home_work';
    case 8: // Quadplex
      return 'group_add';
    case 9: // Commercial
      return 'storefront';
    case 10: // SFR Portfolio
      return 'holiday_village';
    case 11: // MFR Portfolio
      return 'domain_add';
    case 12: // Loan
      return 'bungalow';
    default: 
      return 'stack';
  }
}

function setIconColor(
  rentedUnits: number,
  totalUnits: number,
): string {
  if (rentedUnits === 0) {
    return 'red';
  } else if (rentedUnits === totalUnits) {
    return 'green';
  }
  return 'yellow';
}