import Axios, { AxiosInstance } from "axios";
import { setupCache } from "axios-cache-interceptor";

export class HttpRequester {
  private static instance: AxiosInstance;

  private constructor() { }

  public static getInstance() {
    if (HttpRequester.instance) {
      return HttpRequester.instance;
    }
    const axios = Axios.create();
    HttpRequester.instance = setupCache(axios);
    return HttpRequester.instance;
  }
}

export function httpRequester() {
  return HttpRequester.getInstance();
}
