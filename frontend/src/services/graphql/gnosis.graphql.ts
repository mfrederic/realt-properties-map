import { gql } from "@apollo/client";

export const RealTokenGQL = gql`
query RealToken($addressList: [Bytes!]) {
  accounts(where: {address_in: $addressList}) {
    address
    balances(
      where: {amount_gt: "0"}
      first: 1000
      orderBy: amount
      orderDirection: desc
    ) {
      token {
        address
      }
      amount
    }
  }
}
`;