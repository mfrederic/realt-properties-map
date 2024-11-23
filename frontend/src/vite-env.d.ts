/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_REALT_PROPERTIES_BACKEND_URL: string;
  readonly VITE_REALT_THEGRAPH_URL: string;
  readonly VITE_REALT_THEGRAPH_API_KEY: string;
  readonly VITE_REALT_THEGRAPH_GNOSIS: string;
  readonly VITE_REALT_THEGRAPH_RMM: string;
  readonly VITE_REALT_THEGRAPH_ETH: string;
  readonly VITE_GA_TRACKING_ID: string;
  readonly MODE: string;
  readonly BASE_URL: string;
  readonly PROD: boolean;
  readonly DEV: boolean;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
