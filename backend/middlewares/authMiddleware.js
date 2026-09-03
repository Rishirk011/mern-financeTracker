import jwt from 'jsonwebtoken'
import userModel from '../models/userModel.js'

export const protect = async(req,res,next)=>{

    let token;
        
        if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')){
             try{
                token = req.headers.authorization.split(' ')[0];
                const decoded = jwt.verify(token,process.env.JWT_SECRET);
                req.user = await userModel.findById(decoded.id).select('-password');

                next();
            }
            catch(err){
                res.status(401);
                throw new Error("user not authorized");
            }
        }
        
        if(!token){
            res.status(400);
            throw new Error("token is empty");
        }

}

export default protect;