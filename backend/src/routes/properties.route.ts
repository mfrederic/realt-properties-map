import { Router } from "express";
import { get } from "../controllers/properties.controller";
import { generatePinSvg } from "../controllers/pin.controller";

const PropertiesRouter = Router();

PropertiesRouter.get('/', get);
PropertiesRouter.get('/pin', generatePinSvg);

export default PropertiesRouter;