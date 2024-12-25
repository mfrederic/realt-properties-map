import { Router } from "express";
import { authenticateToken } from "../middlewares/auth.middleware";
import { log, read } from "../controllers/logger.controller";
import { logLimiter } from "../controllers/logger.controller";

const LoggerRouter = Router();

LoggerRouter.post('/', authenticateToken, logLimiter, log);
LoggerRouter.get('/', authenticateToken, read);

export default LoggerRouter; 