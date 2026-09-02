import jwt from 'jsonwebtoken';
import bcryptjs from 'bcryptjs';
import userModel from '../models/userModel.js';
import bcrypt from 'bcryptjs';

export const registerUser = async (req,res) => {
    try{

        const {name,email,password} = req.body;

        if(!name || !email || !password){
            res.status(400);
            throw new Error("fields are empty");
        }

        const existingUser = await userModel.find({email});

        if(existingUser){
            res.status(400);
            throw new Error("user aalready exists");
        }

        const salt = await bcryptjs.genSalt(10);
        const hash = await bcryptjs.hash(password,salt);

        const user = await userModel.create({
            name,
            email,
            password: hash
        });

        if(user){
            
            res.status(201).json({
                _id:user.id,
                name:user.name,
                email:user.email,
                token:generateToken(user._id)
            });

        }

    }
    catch(err){
        res.status(400);
    }
}

export const loginUser = async (req,res) => {
    try{
        
        const {email,password} = req.body;

        const userExists = await userModel.findOne({email});

        if(userExists && (await bcrypt.compare(password,userExists.password))){
            res.status(200).json({
                _id:userExists.id,
                name:user.name,
                email:user.email,
                token:generateToken(_id)
            });
        }

        else{
            res.status(400);
            throw new Error("invalid credentials");
        }

    }
    catch(err){
        res.status(404)
        console.log(err.message);
    
    }
};

export const getMe = async (req,res) => {
    return res.status(200).json(req.user);
}

export const generateToken = (id) => {
    return jwt.sign(id,process.env.JWT_SECRET,{
        'expiresIn':'30d'
    });
};

