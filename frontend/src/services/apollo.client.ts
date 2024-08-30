import { ApolloClient, InMemoryCache } from "@apollo/client";
import Env from "../utils/env";

function getUrl(url: string): string {
  return `${Env.REACT_APP_REALT_THEGRAPH_URL}${Env.REACT_APP_REALT_THEGRAPH_API_KEY}/${url}`;
}

const cache = new InMemoryCache({
  typePolicies: {
    Account: {
      keyFields: ["address"],
    }
  }
});

export const RmmClient = new ApolloClient({
  uri: getUrl(Env.REACT_APP_REALT_THEGRAPH_RMM),
  cache,
});

export const GnosisClient = new ApolloClient({
  uri: getUrl(Env.REACT_APP_REALT_THEGRAPH_GNOSIS),
  cache,
});

export const EthClient = new ApolloClient({
  uri: getUrl(Env.REACT_APP_REALT_THEGRAPH_ETH),
  cache,
});