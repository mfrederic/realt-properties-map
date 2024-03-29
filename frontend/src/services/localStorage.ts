const LOCAL_STORAGE_PREFIX = 'REALT_';

export function getKey(key: string) {
  return `${LOCAL_STORAGE_PREFIX}${key}`;
}

export function getItem<T>(key: string, defaultValue: T): T {
  const item = localStorage.getItem(getKey(key));
  let value = defaultValue;
  if (item) {
    const fromLS = JSON.parse(item);
    value = {
      ...value,
      ...fromLS,
    };
  }
  setItem(key, value);
  return value;
}

export function setItem<T>(key: string, value: T) {
  localStorage.setItem(getKey(key), JSON.stringify(value));
}
