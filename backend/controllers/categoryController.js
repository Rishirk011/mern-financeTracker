import asyncHandler from "express-async-handler"
import transactionModel from "../models/transactionModel.js";


const getByCategory = (asyncHandler(async (req,res) => {

    const id = req.user._id;

    const category = await transactionModel.aggregate([

        { $match : {user : req.user._id, type : 'expense'}},

        { $group: { _id : '$category', amount :{$sum : '$amount'}}}    
    ]);

    res.status(200).json(category);

}));

export default getByCategory;

