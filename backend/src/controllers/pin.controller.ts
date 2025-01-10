import { Request, Response } from 'express';
import { getPinSvg, getPinSvgFromCache, Occupation, PropertyType, writePinSvgToCache } from '../services/pin/pin.service';

function validateParams(
  query: Request['query'],
  res: Response,
): {
  occupation: Occupation,
  propertyType: PropertyType,
  owned: boolean,
  icon: boolean,
} | undefined {
  const { occupation, propertyType, owned, icon } = query;
  if (!occupation || !propertyType) {
    res.status(400).json({ error: 'Occupation, propertyType parameters are required' });
    return;
  }
  if (typeof occupation !== 'string' || typeof propertyType !== 'string') {
    res.status(400).json({ error: 'Occupation, propertyType parameters must be strings' });
    return;
  }
  const occupationEnum: Occupation[] = ['red', 'green', 'yellow'];
  const propertyTypeEnum: PropertyType[] = ['singleFamily', 'multiFamily', 'duplex', 'condominium', 'mixedUse', 'quadplex', 'commercial', 'sfrPortfolio', 'mfrPortfolio', 'loan', 'stack'];
  if (!occupationEnum.includes(occupation as Occupation) || !propertyTypeEnum.includes(propertyType as PropertyType)) {
    res.status(400).json({ error: 'Invalid occupation or propertyType' });
    return;
  }
  return {
    occupation: occupation as Occupation,
    propertyType: propertyType as PropertyType,
    owned: !owned && owned !== '' ? false : true,
    icon: !icon && icon !== '' ? false : true,
  };
}

export async function generatePinSvg(
  req: Request,
  res: Response,
) {
  const params = validateParams(req.query, res);
  if (!params) {
    return;
  }
  const { occupation, propertyType, owned, icon } = params;

  res.setHeader('Content-Type', 'image/svg+xml')
    .setHeader('Content-Security-Policy', "default-src 'self'")
    .setHeader('X-Content-Type-Options', 'nosniff')
    .setHeader('Cache-Control', 'public, max-age=604800, immutable')
    .setTimeout(5000, () => {
      res.status(504).json({ error: 'Request timed out' });
    });

  try {
    const existingSvg = await getPinSvgFromCache(occupation, propertyType, owned, icon);
    if (existingSvg) {
      return res.send(existingSvg);
    }

    const svg = await getPinSvg(
      occupation,
      propertyType,
      owned,
      icon,
    );
    await writePinSvgToCache(
      occupation,
      propertyType,
      owned,
      icon,
      svg,
    );

    return res.send(svg);
  } catch (error) {
    console.error('Error generating pin SVG:', error);
    return res.status(500).send('Error generating pin SVG');
  }
}