const COMPILE_TIME_ENV = process.env;

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      REACT_APP_REALT_PROPERTIES_BACKEND_URL: string;
      REACT_APP_REALT_THEGRAPH_URL: string;
      REACT_APP_REALT_THEGRAPH_API_KEY: string;
      REACT_APP_REALT_THEGRAPH_GNOSIS: string;
      REACT_APP_REALT_THEGRAPH_RMM: string;
      REACT_APP_REALT_THEGRAPH_ETH: string;
      REACT_APP_GA_TRACKING_ID: string;
    }
  }
}

let Env = COMPILE_TIME_ENV;

if (process.env.NODE_ENV === 'production') {
  try {
    const runtimeEnvMeta = document.querySelector('#__RUNTIME_ENV__');
    const runtimeEnvRaw = runtimeEnvMeta?.textContent ?? '{}';
    const runtimeEnv = JSON.parse(runtimeEnvRaw);
    Env = { ...COMPILE_TIME_ENV, ...runtimeEnv };

    const mandatoryKeys = [
      'REACT_APP_REALT_PROPERTIES_BACKEND_URL',
      'REACT_APP_REALT_THEGRAPH_URL',
      'REACT_APP_REALT_THEGRAPH_API_KEY',
      'REACT_APP_REALT_THEGRAPH_GNOSIS',
      'REACT_APP_REALT_THEGRAPH_RMM',
      'REACT_APP_REALT_THEGRAPH_ETH',
    ];
    if (mandatoryKeys.some((key) => Env[key] === undefined)) {
      throw new Error('Missing mandatory environment variables');
    }
  } catch (e) {
    console.error('Could not load runtime env', e);
  }
}

export default Env;