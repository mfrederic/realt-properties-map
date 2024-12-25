import { NextFunction, Request, Response } from "express";
import axios from "axios";
import CacheService from "../services/cache.service";

const PropertiesCacheKey = 'properties';

const DEFAULT_PROPERTIES_CACHE_TTL = 60;

// TTL is in seconds, 1 hour
const cachedTime = (process.env.PROPERTIES_CACHE_TTL ? parseInt(process.env.PROPERTIES_CACHE_TTL) * 60 : 60) * 60;

export async function get(req: Request, res: Response, next: NextFunction): Promise<Response<any, Record<string, any>>> {
  try {
    const cacheService = CacheService.getInstance();
    const cached = cacheService.get(PropertiesCacheKey)
    if (cached) {
      console.log('Returning cached properties')
      return res.json(cached)
    }

    const { data: properties } = await axios.get(`${process.env.REALT_COMMUNITY_URL}/api/properties`)
    cacheService.set(PropertiesCacheKey, properties, cachedTime)
    return res.json(properties)
  } catch (err) {
    console.error(`Error while getting properties`, (err as any).message)
    next(err)
  }
  return res.status(500).json({ message: 'Internal server error' })
}