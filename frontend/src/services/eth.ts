import { RealTokenGQL } from "./graphql/gnosis.graphql";
import { RealTokenQuery, RealTokenQueryVariables } from "../gql/gnosis/graphql";
import { EthClient } from "./apollo.client";

export interface GnosisToken {
  wallet: string;
  address: string;
  amount: number;
  gnosis: 'gnosis';
}

export async function getEthTokens(walletAddressList: string[]): Promise<GnosisToken[]> {
  if (walletAddressList.length === 0) {
    return [];
  }

  // check if offline
  if (!navigator.onLine) {
    const data = await EthClient.readQuery<RealTokenQuery>({
      query: RealTokenGQL,
      variables: { addressList: walletAddressList }
    });
    return data ? mapData(data) : [];
  }
  
  const response = await EthClient.query<RealTokenQuery, RealTokenQueryVariables>({
    query: RealTokenGQL,
    variables: { addressList: walletAddressList }
  });

  if (response.errors || response.error) {
    console.error("Error retrieving Gnosis balance");
    return [];
  }

  return mapData(response.data);
}

function mapData(data: RealTokenQuery): GnosisToken[] {
  return data.accounts
    .flatMap((address) =>
      address.balances.map((item) => ({
        address: item.token.address,
        wallet: address.address,
        amount: item.amount,
        gnosis: 'gnosis',
      }))
    );
}