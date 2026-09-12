import { Router } from "express";
import protect from "../middlewares/authMiddleware.js";
import getMonthly from "../controllers/monthlyController.js";

const monthlySummaryRoute = Router();

monthlySummaryRoute.get('/',protect,getMonthly)

export default monthlySummaryRoute;