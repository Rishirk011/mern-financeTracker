import { Router } from "express";
import userRoute from "./userRoutes.js";
import transactionRoute from "./transactionRoutes.js";

const routes = Router();

routes.use('/users',userRoute);
routes.use('/transactions',transactionRoute);

export default routes;
