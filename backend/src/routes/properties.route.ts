import { Router } from "express";
import { get } from "../controllers/properties.controller";

const PropertiesRouter = Router();

PropertiesRouter.get('/', get);

export default PropertiesRouter;