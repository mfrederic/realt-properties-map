import { Request, Response, NextFunction } from 'express';
import dotenv from 'dotenv';
import crypto from 'crypto';

dotenv.config();

function hashToken(token: string): string {
  return crypto.createHash('sha256').update(token).digest('hex');
}

export const authenticateToken = (req: Request, res: Response, next: NextFunction) => {
  const actual_token = process.env.API_TOKEN
    ? hashToken(process.env.API_TOKEN)
    : '92f5b24048bd100fc7cb1dc770f0d72e1ae4300eb9e13f642304ee71e8515ef4';
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) {
    return res.status(401).json({ message: 'No token provided' });
  }

  if (token !== actual_token) {
    return res.status(403).json({ message: 'Invalid token' });
  }

  next();
}; 