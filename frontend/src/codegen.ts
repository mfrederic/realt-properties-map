import { CodegenConfig } from '@graphql-codegen/cli'
 
const config: CodegenConfig = {
  ignoreNoDocuments: true,
  generates: {
    './src/gql/rmm/': {
      documents: ['src/**/rmm.graphql.ts'],
      schema: 'https://api.thegraph.com/subgraphs/name/realtoken-thegraph/rmm-v3-wrapper-gnosis',
      preset: 'client',
      config: {
        skipTypename: true,
        dedupeFragments: true,
      },
      presetConfig: {
        fragmentMasking: false,
      }
    },
    './src/gql/gnosis/': {
      documents: ['src/**/gnosis.graphql.ts'],
      schema: 'https://api.thegraph.com/subgraphs/name/realtoken-thegraph/realtoken-xdai',
      preset: 'client',
      config: {
        skipTypename: true,
        dedupeFragments: true,
      },
      presetConfig: {
        fragmentMasking: false,
      }
    }
  },
  config: {
    nonOptionalTypename: true,
  }
}
 
export default config