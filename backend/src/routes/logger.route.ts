import { Router } from "express";
import { authenticateToken } from "../middlewares/auth.middleware";
import { log } from "../controllers/logger.controller";
import { logLimiter } from "../controllers/logger.controller";

const LoggerRouter = Router();

LoggerRouter.post('/', authenticateToken, logLimiter, log);

export default LoggerRouter; 