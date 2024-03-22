import { ApolloClient, InMemoryCache } from "@apollo/client";

export const RmmClient = new ApolloClient({
  uri: 'https://api.thegraph.com/subgraphs/name/realtoken-thegraph/rmm-v3-wrapper-gnosis',
  cache: new InMemoryCache(),
});

export const GnosisClient = new ApolloClient({
  uri: 'https://api.thegraph.com/subgraphs/name/realtoken-thegraph/realtoken-xdai',
  cache: new InMemoryCache(),
});
