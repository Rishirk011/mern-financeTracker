import {
    registerUser,loginUser,getMe
} from "../controllers/userController.js";
import {Router} from "express";
import protect from "../middlewares/authMiddleware.js";

const userRoute = Router();

userRoute.post('/api/register',registerUser);
userRoute.post('/api/login',loginUser);
userRoute.get('/api/me',protect,getMe);

export default userRoute
