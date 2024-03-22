import { ApolloClient, InMemoryCache } from "@apollo/client";
import Env from "../utils/env";
import { RealTokenGQL } from "./graphql/gnosis.graphql";
import { RealTokenQuery, RealTokenQueryVariables } from "../gql/gnosis/graphql";

export interface GnosisToken {
  wallet: string;
  address: string;
  amount: number;
  gnosis: 'gnosis';
}

export const GnosisClient = new ApolloClient({
  uri: `${Env.REACT_APP_REALT_THEGRAPH_URL}${Env.REACT_APP_REALT_THEGRAPH_GNOSIS}`,
  cache: new InMemoryCache(),
});

export async function getGnosisTokens(walletAddressList: string[]): Promise<GnosisToken[]> {
  if (walletAddressList.length === 0) {
    return [];
  }
  
  const response = await GnosisClient.query<RealTokenQuery, RealTokenQueryVariables>({
    query: RealTokenGQL,
    variables: { addressList: walletAddressList }
  });

  if (response.errors || response.error) {
    console.error("Error retrieving Gnosis balance");
    return [];
  }

  return response.data.accounts
    .flatMap((address) =>
      address.balances.map((item) => ({
        address: item.token.address,
        wallet: address.address,
        amount: item.amount,
        gnosis: 'gnosis',
      }))
    );
}