import {
    registerUser,loginUser,getMe
} from "../controllers/userController.js";
import {Router} from "express";
import protect from "../middlewares/authMiddleware.js";

const userRoute = Router();

userRoute.post('/register',registerUser);
userRoute.post('/login',loginUser);
userRoute.get('/me',protect,getMe);

export default userRoute
