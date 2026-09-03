import { Router } from "express";
import userRoute from "./userRoutes.js";

const routes = Router();

routes.use('/users',userRoute);

export default routes;