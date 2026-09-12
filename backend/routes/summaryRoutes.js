import { Router } from "express";
import { total } from "../controllers/summaryController.js";
import {protect} from '../middlewares/authMiddleware.js'
const summaryRoute = Router();

summaryRoute.get('/',protect,total);

export default summaryRoute;



