import { ApolloClient, InMemoryCache } from "@apollo/client";
import Env from "../utils/env";
import { RealToken, RmmQuery, RmmQueryVariables } from "../gql/rmm/graphql";
import { RmmGQL } from "./graphql/rmm.graphql";

export interface RmmToken extends Pick<RealToken, 'address' | 'name' | 'decimals'> {
  wallet: string;
  address: string;
  amount: number;
  rmm: 'rmm';
}

export const RmmClient = new ApolloClient({
  uri: `${Env.REACT_APP_REALT_THEGRAPH_URL}${Env.REACT_APP_REALT_THEGRAPH_RMM}`,
  cache: new InMemoryCache(),
});

export async function getRmmTokens(walletAddressList: string[]): Promise<RmmToken[]> {
  if (walletAddressList.length === 0) {
    return [];
  }
  
  const result = await RmmClient.query<RmmQuery, RmmQueryVariables>({
    query: RmmGQL,
    variables: {
      addressList: walletAddressList
    }
  });

  if (result.errors || result.error) {
    console.error("Error retrieving RMM v3 balance");
    return [];
  }

  return result.data.users
    .flatMap((address) =>
      address.balances.map<RmmToken>((item) => ({
        ...item.token,
        wallet: address.id,
        address: item.token.address,
        amount: parseFloat(item.amount) / Math.pow(10, item.token.decimals),
        rmm: 'rmm',
      }))
    );
}