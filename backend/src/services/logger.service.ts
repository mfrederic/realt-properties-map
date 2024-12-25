import fs from 'fs/promises';
import path from 'path';
import { createWriteStream, existsSync, mkdirSync, WriteStream } from 'fs';

export class LoggerService {
  private static instance: LoggerService;
  private readonly logDir: string;
  private readonly maxFileSize: number; // in bytes
  private readonly maxFiles: number;
  private currentLogFile: string;
  private writeStream: WriteStream | null;

  private constructor() {
    this.logDir = path.join(__dirname, '../../logs');
    this.maxFileSize = 5 * 1024 * 1024; // 5MB
    this.maxFiles = 5;
    this.currentLogFile = path.join(this.logDir, 'app.log');
    this.writeStream = null;
    this.initializeLogDirectory();
  }

  public static getInstance(): LoggerService {
    if (!LoggerService.instance) {
      LoggerService.instance = new LoggerService();
    }
    return LoggerService.instance;
  }

  private initializeLogDirectory(): void {
    if (!existsSync(this.logDir)) {
      mkdirSync(this.logDir, { recursive: true });
    }
  }

  private async rotateLog(): Promise<void> {
    if (this.writeStream) {
      this.writeStream.end();
      this.writeStream = null;
    }

    const files = await fs.readdir(this.logDir);
    const logFiles = files
      .filter(file => file.startsWith('app.log'))
      .sort((a, b) => b.localeCompare(a));

    // Rotate existing files
    for (const file of logFiles) {
      const filePath = path.join(this.logDir, file);
      const stats = await fs.stat(filePath);
      
      if (file === 'app.log' && stats.size >= this.maxFileSize) {
        const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
        await fs.rename(filePath, path.join(this.logDir, `app.log.${timestamp}`));
      }
    }

    // Remove oldest files if we exceed maxFiles
    if (logFiles.length >= this.maxFiles) {
      const filesToRemove = logFiles.slice(this.maxFiles - 1);
      for (const file of filesToRemove) {
        await fs.unlink(path.join(this.logDir, file));
      }
    }
  }

  private getWriteStream(): WriteStream {
    if (!this.writeStream) {
      this.writeStream = createWriteStream(this.currentLogFile, { flags: 'a' });
    }
    return this.writeStream;
  }

  public async log(level: 'INFO' | 'ERROR' | 'WARN', message: string, metadata?: any): Promise<void> {
    try {
      const stats = existsSync(this.currentLogFile) 
        ? await fs.stat(this.currentLogFile)
        : { size: 0 };

      if (stats.size >= this.maxFileSize) {
        await this.rotateLog();
      }

      const timestamp = new Date().toISOString();
      const logEntry = {
        timestamp,
        level,
        message,
        ...(metadata && { metadata }),
      };

      const logLine = `${JSON.stringify(logEntry)}\n`;
      this.getWriteStream().write(logLine);
    } catch (error) {
      console.error('Error writing to log file:', error);
    }
  }

  public async info(message: string, metadata?: any): Promise<void> {
    return this.log('INFO', message, metadata);
  }

  public async error(message: string, metadata?: any): Promise<void> {
    return this.log('ERROR', message, metadata);
  }

  public async warn(message: string, metadata?: any): Promise<void> {
    return this.log('WARN', message, metadata);
  }
}

export default LoggerService.getInstance();
