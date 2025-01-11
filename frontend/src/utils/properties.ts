import dayjsWrapper from "./date";
import { RentStart } from "../store/filtering/filteringReducer";
import { Property } from "../types/property";

export function filterProperties(
  properties: Property[],
  displayAll: boolean,
  displayGnosis: boolean,
  displayRmm: boolean,
  selected: string | null = null,
  propertyTypes: string[] = [],
  propertyOccupations: { min: number; max: number } = { min: 0, max: 100 },
  propertyYields: { min: number; max?: number } = { min: 0 },
  rentStart: RentStart = 'all',
) {
  return properties
    .filter((property) => {
      if (selected && property.address === selected) {
        return true;
      }
      let toInclude = !property.isOld && property.productType !== 'equity_token';
      if (!displayAll && property.ownedAmount <= 0) {
        return false;
      }
      if (!displayGnosis && property.source === 'gnosis') {
        return false;
      }
      if (!displayRmm && property.source === 'rmm') {
        return false;
      }
      if (propertyTypes.length > 0 && property.propertyType && !propertyTypes.includes(property.propertyType.toString())) {
        return false;
      }
      const occupiedUnits = property.rentedUnits / property.totalUnits;
      if (propertyOccupations.min > 0 && occupiedUnits < propertyOccupations.min / 100) {
        return false;
      }
      if (propertyOccupations.max < 100 && occupiedUnits > propertyOccupations.max / 100) {
        return false;
      }
      if (propertyYields.min > 0 && property.annualPercentageYield < propertyYields.min) {
        return false;
      }
      if (propertyYields.max && propertyYields.max < 20 && property.annualPercentageYield > propertyYields.max) {
        return false;
      }
      if (rentStart !== 'all') {
        if (!property.rentStartDate) {
          return false;
        }
        const rentStartDate = dayjsWrapper.utc(property.rentStartDate.date, 'YYYY-MM-DD HH:mm:ss.SSSSSS');
        if (rentStart === 'past' && rentStartDate.isAfter(dayjsWrapper())) {
          return false;
        }
        if (rentStart === 'future' && rentStartDate.isBefore(dayjsWrapper())) {
          return false;
        }
      }
      return toInclude;
    })
}