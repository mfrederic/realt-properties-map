import { Maybe } from "./global";
import { Coordinates, RealToken } from "./realtProperty";

export interface Property extends RealToken {
  icon: string;
  address: string;
  caseSensitiveAddress: string;
  iconColorClass: string;
  ownedAmount: number;
  ownerWallets: string[];
  source: Maybe<'gnosis' | 'rmm'>;
  isOld: boolean;
  coordinates: Coordinates;
}