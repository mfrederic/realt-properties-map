export interface CacheOptions {
  duration?: number;
  staleOnError?: boolean;
}

export interface CachedData<T> {
  timestamp: number;
  data: T;
}

export class Cache {
  static async fetch<T>(
    key: string,
    fetchFn: () => Promise<T>,
    options: CacheOptions = {}
  ): Promise<{ data: T; error?: boolean }> {
    const { staleOnError = true } = options;

    // Try to get cached data
    const cachedData = localStorage.getItem(key);
    try {
      const fresh = await fetchFn();
      // Cache the successful response
      localStorage.setItem(
        key,
        JSON.stringify({
          timestamp: Date.now(),
          data: fresh,
        })
      );
      return { data: fresh };
    } catch (error) {
      // If request fails and we have cached data, return it if staleOnError is true
      if (staleOnError && cachedData) {
        const parsed = JSON.parse(cachedData) as CachedData<T>;
        return { 
          data: parsed.data,
          error: true,
        };
      }
      throw error;
    }
  }

  static clear(key: string): void {
    localStorage.removeItem(key);
  }
} 