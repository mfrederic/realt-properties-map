import { access, mkdir, readFile, writeFile } from "fs/promises";
import path from "path";

export type Occupation = 'red' | 'green' | 'yellow';
export type PropertyType = 'singleFamily' | 'multiFamily' | 'duplex' | 'condominium' | 'mixedUse' | 'quadplex' | 'commercial' | 'sfrPortfolio' | 'mfrPortfolio' | 'loan' | 'stack';

function getOccupationColor(occupation: Occupation) {
  switch (occupation) {
    case 'red':
      return '#f44336';
    case 'green':
      return '#43a047';
    case 'yellow':
      return '#fdd835';
    default:
      return '#757575';
  }
}

function getPropertyTypeColor(propertyType: PropertyType) {
  switch (propertyType) {
    case 'singleFamily':
      return '#1e88e5';
    case 'multiFamily':
      return '#43a047';
    case 'duplex':
      return '#ff9800';
    case 'condominium':
      return '#9c27b0';
    case 'mixedUse':
      return '#e91e63';
    case 'quadplex':
      return '#fdd835';
    case 'commercial':
      return '#f44336';
    case 'sfrPortfolio':
      return '#795548';
    case 'mfrPortfolio':
      return '#009688';
    case 'loan':
      return '#673ab7';
    case 'stack':
      return '#757575';
    default:
      return '#757575';
  }
}

export function getPinCacheKey(
  occupation: Occupation,
  propertyType: PropertyType,
  owned?: boolean,
  icon?: boolean,
) {
  let key = `${occupation}-${propertyType}`;
  if (owned) {
    key += `-owned`;
  }
  if (icon) {
    key += `-icon`;
  }
  return key;
}

export async function getPinSvg(
  occupation: Occupation,
  propertyType: PropertyType,
  owned: boolean,
  icon: boolean,
) {
  const strokeWidth = owned ? '4' : '1';
  const occupationColor = getOccupationColor(occupation);
  const propertyTypeColor = getPropertyTypeColor(propertyType);
  const iconPath = icon ? await readFile(path.resolve(__dirname, 'icons', `${propertyType}.svg`), 'utf-8') : '';

  return `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 78">
  <path 
    class="${occupation}-pin border-right border-white stroke-white"
    stroke="white"
    stroke-width="${strokeWidth}"
    fill="${occupationColor}"
    d="M24,0 A24,24,0,0,0,0,24C0,37.25,12,48,24,72L24,0z"
  />
  <path 
    class="${propertyType}-pin border-left border-white stroke-white"
    stroke="white"
    stroke-width="${strokeWidth}"
    fill="${propertyTypeColor}"
    d="M24,0 L24,72C36,48,48,37.25,48,24A24,24,0,0,0,24,0Z"
  />
  <circle
    cx="24"
    cy="24"
    r="9"
    fill="white"
  />
  ${iconPath}
</svg>`.trim();
}

export async function writePinSvgToCache(
  occupation: Occupation,
  propertyType: PropertyType,
  owned: boolean,
  icon: boolean,
  svg: string,
) {
  await writeFile(
    path.resolve(
      __dirname,
      'pins',
      `${getPinCacheKey(occupation, propertyType, owned, icon)}.svg`,
    ),
    svg,
  );
}

export async function getPinSvgFromCache(
  occupation: Occupation,
  propertyType: PropertyType,
  owned: boolean,
  icon: boolean,
) {
  try {
    const filePath = path.resolve(
      __dirname,
      'pins',
      `${getPinCacheKey(occupation, propertyType, owned, icon)}.svg`,
    );
    const exists = await access(filePath).then(() => true).catch(() => false);
    if (!exists) {
      return undefined;
    }
    return readFile(filePath, 'utf-8');
  } catch (error) {
    return undefined;
  }
}

export async function initPinService() {
  const exists = await access(path.resolve(__dirname, 'pins')).then(() => true).catch(() => false);
  if (!exists) {
    await mkdir(path.resolve(__dirname, 'pins'), { recursive: true });
  }
}
