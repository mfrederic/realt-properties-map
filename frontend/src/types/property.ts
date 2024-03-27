import { Maybe } from "./global";
import { RealToken } from "./realtProperty";

export interface Property extends RealToken {
  icon: string;
  address: string;
  iconColorClass: string;
  ownedAmount: number;
  ownerWallets: string[];
  source: Maybe<'gnosis' | 'rmm'>;
  isOld: boolean;
}