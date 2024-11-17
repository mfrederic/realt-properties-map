import Env from "../utils/env";
import { httpRequester } from "./http";
import { Property } from "../types/property";
import { RealToken } from "../types/realtProperty";

export async function getRealTokens(): Promise<{
  error?: boolean,
  realtokens: Array<RealToken>,
}> {
  const http = httpRequester();
  const response = await http.get<Array<RealToken>>(`${Env.REACT_APP_REALT_PROPERTIES_BACKEND_URL}properties`);
  if (!Array.isArray(response.data)) {
    throw new Error('Invalid response');
  }
  return {
    realtokens: response.data,
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
      });
      return accu;
    }, new Map<string, Property>());
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