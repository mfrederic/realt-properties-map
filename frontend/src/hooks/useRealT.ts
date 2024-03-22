import Env from "../utils/env";
import { httpRequester } from "../services/http";
import { Property } from "../types/property";
import { RealtProperty } from "../types/realtProperty";

export async function getRealtProperties(): Promise<{
  error?: boolean,
  properties: Array<RealtProperty>,
}> {
  const http = httpRequester();
  try {
    const response = await http.get<Array<RealtProperty>>(`${Env.REACT_APP_REALT_PROPERTIES_BACKEND_URL}properties`, {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
      },
    });
    return {
      properties: response.data,
    };
  } catch (error) {
    return {
      error: true,
      properties: [],
    };
  }
}

export function mapPropertiesList(
  realtProperties: Array<RealtProperty>,
): Map<string, Property> {
  return realtProperties
    .reduce((accu, property) => {
      if (!property.gnosisContract) {
        return accu;
      }
      accu.set(property.gnosisContract.toLowerCase(), {
        ...property,
        address: property.gnosisContract.toLowerCase(),
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
    case 1:
    case 10:
      return 'home';
    case 2:
      return 'apartment';
    case 3:
      return 'group';
    case 8:
      return 'group_add';
    case 4:
      return 'umbrella-beach';
    case 6:
      return 'home_work';
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