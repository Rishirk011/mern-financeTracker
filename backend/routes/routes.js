import { Router } from "express";
import userRoute from "./userRoutes.js";
import transactionRoute from "./transactionRoutes.js";
import summaryRoute from "./summaryRoutes.js";
import categoryRoutes from "./categoryRoutes.js";
import monthlySummaryRoute from "./monthRoutes.js";


const routes = Router();

routes.use('/users',userRoute);
routes.use('/transactions',transactionRoute);
routes.use('/summary',summaryRoute);
routes.use('/category',categoryRoutes);
routes.use('/monthSummary',monthlySummaryRoute);

export default routes;
