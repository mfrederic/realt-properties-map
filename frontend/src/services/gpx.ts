import { Property } from "../types/property";
import dayjsWrapper from "../utils/date";

const GPX_HEADER = `<?xml version="1.0" encoding="UTF-8"?>
<gpx xmlns="https://www.topografix.com/GPX/1/1"
  version="1.1"
  creator="RealT Properties Map"
  xmlns:xsi="https://www.w3.org/2001/XMLSchema-instance"
  xsi:schemaLocation="https://www.topografix.com/GPX/1/1 https://www.topografix.com/GPX/1/1/gpx.xsd
  https://www.topografix.com/GPX/gpx_style/0/2 https://www.topografix.com/GPX/gpx_style/0/2/gpx_style.xsd
  https://www.topografix.com/GPX/gpx_overlay/0/4 https://www.topografix.com/GPX/gpx_overlay/0/4/gpx_overlay.xsd
  https://www.topografix.com/GPX/gpx_modified/0/1 https://www.topografix.com/GPX/gpx_modified/0/1/gpx_modified.xsd">`;

const GPX_FOOTER = '</gpx>';

function escapeXml(value: string): string {
  return value.replace(/[<>&'"]/g, char => {
    switch (char) {
      case '<': return '&lt;';
      case '>': return '&gt;';
      case '&': return '&amp;';
      case "'": return '&apos;';
      case '"': return '&quot;';
      default: return char;
    }
  });
}

function mapWaypoint(property: Property): string {
  const latitude = Number(property.coordinates.lat);
  const longitude = Number(property.coordinates.lng);
    
  if (latitude < -90 || latitude > 90 || longitude < -180 || longitude >= 180) {
    console.warn(`Invalid coordinates for ${property.fullName}: lat=${latitude}, lon=${longitude}`);
    return '';
  }

  function getOwnedDesc(ownedAmount: number, ownerWallets: string[]) {
    if (ownedAmount === 0) {
      return '';
    }

    let desc = `\n      ${ownedAmount} owned on:`;
    for (const ownerWallet of new Set(ownerWallets)) {
      desc += `\n        - ${ownerWallet}`;
    }
    return desc;
  }
  
  return `  <wpt lat="${latitude}" lon="${longitude}">
    <time>${property.rentStartDate.date.replace(' ', 'T')}Z</time>
    <name>${escapeXml(property.fullName)}</name>
    <desc>${getOwnedDesc(property.ownedAmount, property.ownerWallets)}
      Property address on chain: ${escapeXml(property.address)}
      RealT link: ${property.marketplaceLink}
    </desc>
    <src>RealT Properties Map</src>
    <link href="${property.marketplaceLink}" />
    <type>Address</type>
  </wpt>`;
}

function generateGpxContent(properties: Property[]): string {
  const waypoints = properties.map(mapWaypoint).filter(Boolean).join('\n');

  return `${GPX_HEADER.trim()}\n${waypoints}\n${GPX_FOOTER.trim()}`;
}

export function downloadGpxFile(
  properties: Property[],
  filename: string = `RealT Properties Map`,
): void {
  const gpxContent = generateGpxContent(properties);
  if (!gpxContent || gpxContent.length === 0) {
    console.error('Failed to generate GPX content');
    return;
  }
  
  const bom = new Uint8Array([0xEF, 0xBB, 0xBF]);
  const contentWithBOM = new Blob([bom, gpxContent], { 
    type: 'application/gpx+xml; charset=utf-8'
  });

  const url = URL.createObjectURL(contentWithBOM);
  
  const link = document.createElement('a');
  link.href = url;
  link.download = `${filename} [extract_${dayjsWrapper().unix()}].gpx`;
  
  document.body.appendChild(link);
  link.click();
  
  setTimeout(() => {
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  }, 100);
}