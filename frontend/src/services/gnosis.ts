import { RealTokenGQL } from "./graphql/gnosis.graphql";
import { RealTokenQuery, RealTokenQueryVariables } from "../gql/gnosis/graphql";
import { GnosisClient } from "./apollo.client";

export interface GnosisToken {
  wallet: string;
  address: string;
  amount: number;
  gnosis: 'gnosis';
}

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