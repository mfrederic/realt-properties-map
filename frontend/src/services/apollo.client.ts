import { ApolloClient, InMemoryCache } from "@apollo/client";
import Env from "../utils/env";
import { LocalStorageWrapper, CachePersistor } from 'apollo3-cache-persist';

const CACHE_TTL = 24 * 60 * 60 * 1000; // 24 hours in milliseconds

function getUrl(url: string): string {
  return `${Env.REACT_APP_REALT_THEGRAPH_URL}${Env.REACT_APP_REALT_THEGRAPH_API_KEY}/${url}`;
}

const cache = new InMemoryCache({
  typePolicies: {
    Account: {
      keyFields: ["address"],
    },
    RealToken: {
      keyFields: ["address"],
      fields: {
        price: {
          merge: true,
        }
      }
    },
    User: {
      keyFields: ["id"],
      fields: {
        balances: {
          merge(existing = [], incoming: any[]) {
            return [...existing, ...incoming];
          }
        }
      }
    },
    UserTransaction: {
      keyFields: ["txHash", "id"],
    },
    Query: {
      fields: {
        realTokens: {
          keyArgs: false,
          merge(existing = [], incoming: any[], { args }) {
            if (!args?.skip) return incoming;
            const merged = existing ? existing.slice(0) : [];
            for (let i = 0; i < incoming.length; ++i) {
              merged[args.skip + i] = incoming[i];
            }
            return merged;
          }
        },
        users: {
          keyArgs: ["where"],
          merge(existing = [], incoming: any[]) {
            return [...existing, ...incoming];
          }
        }
      }
    }
  }
});

const persistor = new CachePersistor({
  cache,
  storage: new LocalStorageWrapper(window.localStorage),
  debug: true,
  trigger: 'write',
  maxSize: 1048576,
});

export function getLastCacheClear() {
  return localStorage.getItem('lastCacheClear') ? parseInt(localStorage.getItem('lastCacheClear')!) : null;
}

async function initializeCache() {
  const lastClearTime = getLastCacheClear();
  const now = Date.now();
  
  if (lastClearTime && now - lastClearTime > CACHE_TTL) {
    purgeCache();
  } else {
    await persistor.restore();
  }
}
await initializeCache();

export async function purgeCache() {
  if (!persistor) {
    return;
  }
  await persistor.purge();
  localStorage.setItem('lastCacheClear', Date.now().toString());
}

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