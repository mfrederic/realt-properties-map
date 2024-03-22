import { GnosisToken, getGnosisTokens } from "./gnosis";
import { RmmToken, getRmmTokens } from "./rmm";
import { Property } from "../types/property";
import { mapPropertiesList } from "../hooks/useRealT";
import { RealtProperty } from "../types/realtProperty";

export async function getOwnedProperties(
  realtProperties: Array<RealtProperty>,
  walletList: Array<string>,
): Promise<Property[]> {
  const realtAssets = mapPropertiesList(realtProperties);
  const gnosisAssets = await getGnosisTokens(walletList);
  const rmmAssets = await getRmmTokens(walletList);

  function updateRealtAsset(owner: string, tokenAddress: string, amount: number, source: Property['source']) {
    const asset = realtAssets.get(tokenAddress.toLowerCase());
    if (!asset) {
      return;
    }
    asset.ownedAmount = asset?.ownedAmount ? asset.ownedAmount + amount : amount;
    asset.ownerWallets.push(owner.toLowerCase());
    asset.source = source;
  }

  gnosisAssets.forEach((asset) => {
    updateRealtAsset(asset.wallet, asset.address, asset.amount, 'gnosis');
  });

  rmmAssets.forEach((asset) => {
    updateRealtAsset(asset.wallet, asset.address, asset.amount, 'rmm');
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