const LOCAL_STORAGE_PREFIX = 'REALT_';

export function getKey(key: string) {
  return `${LOCAL_STORAGE_PREFIX}${key}`;
}

export function getItem<T>(key: string, defaultValue: T): T {
  const item = localStorage.getItem(getKey(key));
  if (item) {
    return JSON.parse(item);
  }
  setItem(key, defaultValue);
  return defaultValue;
}

export function setItem<T>(key: string, value: T) {
  localStorage.setItem(getKey(key), JSON.stringify(value));
}
