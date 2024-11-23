const COMPILE_TIME_ENV = import.meta.env;

/// <reference types="vite/client" />
interface ImportMetaEnv {
  readonly VITE_REALT_PROPERTIES_BACKEND_URL: string;
  readonly VITE_REALT_THEGRAPH_URL: string;
  readonly VITE_REALT_THEGRAPH_API_KEY: string;
  readonly VITE_REALT_THEGRAPH_GNOSIS: string;
  readonly VITE_REALT_THEGRAPH_RMM: string;
  readonly VITE_REALT_THEGRAPH_ETH: string;
  readonly VITE_GA_TRACKING_ID: string;
}

let Env = COMPILE_TIME_ENV;

if (import.meta.env.PROD) {
  try {
    const runtimeEnvMeta = document.querySelector('#__RUNTIME_ENV__');
    const runtimeEnvRaw = runtimeEnvMeta?.textContent ?? '{}';
    const runtimeEnv = JSON.parse(runtimeEnvRaw);
    Env = { ...COMPILE_TIME_ENV, ...runtimeEnv };

    const mandatoryKeys = [
      'VITE_REALT_PROPERTIES_BACKEND_URL',
      'VITE_REALT_THEGRAPH_URL',
      'VITE_REALT_THEGRAPH_API_KEY',
      'VITE_REALT_THEGRAPH_GNOSIS',
      'VITE_REALT_THEGRAPH_RMM',
      'VITE_REALT_THEGRAPH_ETH',
    ];
    if (mandatoryKeys.some((key) => Env[key] === undefined)) {
      throw new Error('Missing mandatory environment variables');
    }
  } catch (e) {
    console.error('Could not load runtime env', e);
  }
}

export default Env;