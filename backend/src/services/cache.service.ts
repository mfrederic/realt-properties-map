import NodeCache from 'node-cache';

class CacheService {
  private static __instance: CacheService;

  private cache: NodeCache;

  private constructor() {
    console.log('CacheService initialized');
    this.cache = new NodeCache();
  }

  static getInstance() {
    if (!this.__instance) {
      this.__instance = new CacheService();
    }
    return this.__instance;
  }

  get(key: string) {
    return this.cache.get(key);
  }

  set(key: string, value: any, ttl: number) {
    return this.cache.set(key, value, ttl);
  }

  del(key: string) {
    return this.cache.del(key);
  }
}

export default CacheService;
