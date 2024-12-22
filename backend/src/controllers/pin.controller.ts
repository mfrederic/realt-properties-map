import { Request, Response } from 'express';
import { getPinSvg, getPinSvgFromCache, writePinSvgToCache } from '../services/pin/pin.service';

export async function generatePinSvg(
  req: Request,
  res: Response,
) {
  const { occupation, propertyType, owned, icon } = req.query;
  if (!occupation || !propertyType) {
    return res.status(400).json({ error: 'Occupation, propertyType parameters are required' });
  } else if (typeof occupation !== 'string' || typeof propertyType !== 'string') {
    return res.status(400).json({ error: 'Occupation, propertyType parameters must be strings' });
  } else if (!['red', 'green', 'yellow'].includes(occupation) || !['singleFamily', 'multiFamily', 'duplex', 'condominium', 'mixedUse', 'quadplex', 'commercial', 'sfrPortfolio', 'mfrPortfolio', 'loan', 'stack'].includes(propertyType)) {
    return res.status(400).json({ error: 'Invalid occupation or propertyType' });
  }

  res.setHeader('Content-Type', 'image/svg+xml');
  res.setHeader('Content-Security-Policy', "default-src 'self'");
  res.setHeader('X-Content-Type-Options', 'nosniff');
  res.setHeader('Cache-Control', 'public, max-age=604800, immutable');
  res.setTimeout(5000, () => {
    res.status(504).json({ error: 'Request timed out' });
  });

  try {
    const ownedValue = !owned && owned !== '' ? false : true;
    const iconValue = !icon && icon !== '' ? false : true;

    const existingSvg = await getPinSvgFromCache(occupation, propertyType, ownedValue, iconValue);
    if (existingSvg) {
      return res.send(existingSvg);
    }

    const svg = await getPinSvg(
      occupation as string,
      propertyType as string,
      ownedValue,
      iconValue,
    );
    await writePinSvgToCache(
      occupation as string,
      propertyType as string,
      ownedValue,
      iconValue,
      svg,
    );

    return res.send(svg);
  } catch (error) {
    console.error('Error generating pin SVG:', error);
    return res.status(500).send('Error generating pin SVG');
  }
}