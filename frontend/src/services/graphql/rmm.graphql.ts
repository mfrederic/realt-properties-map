import { gql } from "@apollo/client";

export const RmmGQL = gql`
query Rmm($addressList: [ID!]) {
  users(where: {id_in: $addressList}) {
    id
    balances {
      token {
        name
        address
        decimals
      }
      amount
    }
  }
}
`;