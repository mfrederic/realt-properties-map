import { RealToken, RmmQuery, RmmQueryVariables } from "../gql/rmm/graphql";
import { RmmGQL } from "./graphql/rmm.graphql";
import { useApolloClient } from "./apollo.client";

export interface RmmToken extends Pick<RealToken, 'address' | 'name' | 'decimals'> {
  wallet: string;
  address: string;
  amount: number;
  rmm: 'rmm';
}

export async function getRmmTokens(walletAddressList: string[]): Promise<RmmToken[]> {
  if (walletAddressList.length === 0) {
    return [];
  }
  
  const { data, errors } = await (await useApolloClient()).RmmClient.query<RmmQuery, RmmQueryVariables>({
    query: RmmGQL,
    variables: {
      addressList: walletAddressList
    },
    fetchPolicy: 'cache-first',
  });

  if (errors) {
    console.error("Error retrieving RMM v3 balance");
    return [];
  }

  return data.users
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