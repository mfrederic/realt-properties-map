import { GnosisToken, getGnosisTokens } from "./gnosis";
import { RmmToken, getRmmTokens } from "./rmm";
import { Property } from "../types/property";
import { mapPropertiesList } from "./realtokens";
import { RealToken } from "../types/realtProperty";
import { Wallet } from "../types/wallet";

export function getOwnedProperties(
  realtProperties: Array<RealToken>,
  wallets: Wallet[],
): Property[] {
  if (!realtProperties.length) {
    return [];
  }

  const realtAssets = mapPropertiesList(realtProperties);

  function updateRealtAsset(owner: string, tokenAddress: string, amount: number, source: Property['source']) {
    const asset = realtAssets.get(tokenAddress.toLowerCase());
    if (!asset) {
      return;
    }
    asset.ownedAmount = asset?.ownedAmount ? asset.ownedAmount + amount : amount;
    asset.ownerWallets.push(owner.toLowerCase());
    asset.source = source;
  }

  wallets.forEach((wallet) => {
    wallet.gnosis.forEach(([address, amount]) => {
      updateRealtAsset(wallet.address, address, amount, 'gnosis');
    });
    wallet.rmm.forEach(([address, amount]) => {
      updateRealtAsset(wallet.address, address, amount, 'rmm');
    });
  });

  return [...realtAssets.values()];
}

export async function getOwnedTokens(wallets: string[]) {
  const [rmm, gnosis] = await Promise.all([
    getRmmTokens(wallets),
    getGnosisTokens(wallets),
  ]);

  return [...rmm, ...gnosis].reduce((acc, token) => {
    const wallet = acc.get(token.wallet.toLowerCase());
    if (wallet) {
      if ('rmm' in token) {
        wallet[0].push(token);
      } else {
        wallet[1].push(token);
      }
    } else {
      acc.set(token.wallet.toLowerCase(), [
        'rmm' in token ? [token] : [],
        'gnosis' in token ? [token] : [],
      ]);
    }
    return acc;
  }, new Map<string, [Array<RmmToken>, Array<GnosisToken>]>());
}