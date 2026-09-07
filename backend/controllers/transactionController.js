import transactionModel from "../models/transactionModel.js";
import asyncHandler from 'express-async-handler';

export const getTransaction = (asyncHandler(async(req,res)=>{

    const transactions = await transactionModel.find({user:req.user.id});

    res.status(200).json(transactions);

}));

export const addTransaction = (asyncHandler(async(req,res)=>{

    const {title,amount,type,category,date} = req.body;

    if(!title || !amount || !type || !category || !date){
        res.status(400);
        throw new Error("please provide all the fields");
    }

    const transaction = await transactionModel.create({
        user:req.user.id,  
        title,
        amount,
        type,
        category,
        date
    });

    res.status(201).json(transaction);    

}));

export const updateTransaction = (asyncHandler(async(req,res)=>{

    const id = req.params.id;
    const {title,amount,type,category,date} = req.body;
    
    if(!title || !amount || !type || !category || !date){
        res.status(400)
        throw new Error("please enter the details");
    }

    const findTransaction = await transactionModel.findById(id);
  
    if(!findTransaction){
        res.status(404);
        throw new Error("transaction not found");
    }

    if(findTransaction.user.toString() !== req.user.id){
        res.status(401);
        throw new Error("unauthorized access");
    }

    const updatedTransaction = await transactionModel.findByIdAndUpdate(
        id,
        {title,amount,type,category,date},
        {new:true, runValidators:true}
    );

    res.status(200).json(updatedTransaction);

}))

export const deleteTransaction = (asyncHandler(async(req,res)=>{

    const id = req.params.id;
    const transaction = await transactionModel.findById(id);
    
    if(!transaction){
        res.status(404);
        throw new Error("transaction not found");
    }
    
    if(transaction.user.toString() !== req.user.id){
        res.status(401);
        throw new Error("unauthorixed access");
    }

 

    await transactionModel.findByIdAndDelete(id);
    res.status(200).json({msg:"deletetion successful"});

}))