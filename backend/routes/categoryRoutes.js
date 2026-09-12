import { Router } from "express";
import getByCategory from '../controllers/categoryController.js'
import protect from "../middlewares/authMiddleware.js";

const categoryRoutes = Router();

categoryRoutes.get('/',protect,getByCategory);

export default categoryRoutes;