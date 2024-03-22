export interface Wallet {
  address: string;
  uuid: string;
  rmm: [string, number][];
  gnosis: [string, number][];
  visible: boolean;
}