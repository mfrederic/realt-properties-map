const COMPILE_TIME_ENV = process.env;

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      REACT_APP_REALT_PROPERTIES_BACKEND_URL: string;
      REACT_APP_REALT_THEGRAPH_URL: string;
      REACT_APP_REALT_THEGRAPH_GNOSIS: string;
      REACT_APP_REALT_THEGRAPH_RMM: string;
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
  } catch (e) {
    console.error('Could not load runtime env', e);
  }
}

export default Env;