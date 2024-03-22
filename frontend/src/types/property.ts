import { Maybe } from "./global";
import { RealtProperty } from "./realtProperty";

export interface Property extends RealtProperty {
  icon: string;
  address: string;
  iconColorClass: string;
  ownedAmount: number;
  ownerWallets: string[];
  source: Maybe<'gnosis' | 'rmm'>;
  isOld: boolean;
}