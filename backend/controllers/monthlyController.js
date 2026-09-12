import asyncHandler from 'express-async-handler';
import transactionModel from '../models/transactionModel.js';

const getMonthly = (asyncHandler (async (req,res) => {

    const monthSummary = await transactionModel.aggregate([

        {$match : {user: req.user._id}},

        {$group : {
        
            _id : {
                month : {$month : '$date'},
                year : {$year : '$date'},
                type: '$type'
            },

            total : {$sum : '$amount'}
            
        }},

        {$sort : {'_id.month' : 1, '_id.date': 1}}
    
    ]);

    res.json(monthSummary);

}));

export default getMonthly;