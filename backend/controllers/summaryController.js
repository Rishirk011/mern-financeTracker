import transactionModel from "../models/transactionModel.js";
import asyncHandler from 'express-async-handler';


export const total = asyncHandler(async (req,res) => {
    
    const transaction = await transactionModel.find({user:req.user._id});

    const totalIncome = transaction
    .filter(t=> t.type === 'income')
    .reduce((s,t)=>s + t.amount , 0);

    const totalExpense = transaction
    .filter(t=> t.type === 'expense')
    .reduce((s,t)=>s + t.amount , 0)

    res.json({totalIncome, totalExpense, balance: totalIncome - totalExpense});

});

