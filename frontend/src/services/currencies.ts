import { JsonRpcProvider, Contract, formatUnits } from 'ethers';
import { CurrencyRates, PriceFeedContract } from '../types/currency';

const RpcProvider = new JsonRpcProvider('https://rpc.ankr.com/gnosis');

function getChainlinkHandler(
  priceFeedContract: PriceFeedContract,
  decimals = 8,
): () => Promise<number> {
  const ABI = ['function latestAnswer() view returns (int256)']
  const contract = new Contract(priceFeedContract, ABI, RpcProvider)

  return async () => Number(formatUnits(await contract.latestAnswer(), decimals));
}

const getXdaiUsd = getChainlinkHandler(PriceFeedContract.XDAI_USD);
const getEurUsd = getChainlinkHandler(PriceFeedContract.EUR_USD);
const getChfUsd = getChainlinkHandler(PriceFeedContract.CHF_USD);

export async function getRates(): Promise<CurrencyRates> {
  const [XdaiUsd, EurUsd, ChfUsd] = await Promise.all([
    getXdaiUsd(),
    getEurUsd(),
    getChfUsd(),
  ])
  return { XdaiUsd, EurUsd, ChfUsd }
}