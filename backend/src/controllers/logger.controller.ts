import { Request, Response } from 'express';
import rateLimit from 'express-rate-limit';
import LoggerService from '../services/logger.service';

const DEFAULT_LOG_LIMIT_WINDOW_MS = 15;
const DEFAULT_LOG_LIMIT_MAX = 40;

export const logLimiter = rateLimit({
  windowMs: (process.env.LOG_LIMIT_WINDOW_MS ? parseInt(process.env.LOG_LIMIT_WINDOW_MS) : DEFAULT_LOG_LIMIT_WINDOW_MS) * 60 * 1000,
  max: process.env.LOG_LIMIT_MAX ? parseInt(process.env.LOG_LIMIT_MAX) : DEFAULT_LOG_LIMIT_MAX,
  message: { message: 'Too many log requests, please try again later' }
});

export async function log(req: Request, res: Response): Promise<Response> {
  try {
    const { level = 'INFO', message, metadata } = req.body;

    if (!message) {
      return res.status(400).json({ message: 'Message is required' });
    }

    if (!['INFO', 'ERROR', 'WARN'].includes(level)) {
      return res.status(400).json({ message: 'Invalid log level' });
    }

    await LoggerService.log(level, message, metadata);
    return res.status(200).json({ message: 'Log entry created successfully' });
  } catch (error) {
    console.error('Error creating log entry:', error);
    return res.status(500).json({ message: 'Error creating log entry' });
  }
}
