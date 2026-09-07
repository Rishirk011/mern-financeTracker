import mongoose from "mongoose";

const transcactionSchema = new mongoose.Schema(
    {
        user:{
            type:mongoose.Schema.Types.ObjectId,
            required:true,
            ref:'User'
        },

        title:{
            type:String,
            required:true,
            trim:true
        },
        
        amount:{
            type:Number,
            required:true
        },
        
        type:{
            type:String,
            enum:['income','expense'],
            required:true,
        },
        
        category:{
            type:String,
            required:true
        },
        date:{
            type:Date,
            default:Date.now
        }

    },

    {
        timestamps:true
    }

);

const transactionModel = mongoose.model('Transaction',transcactionSchema);

export default transactionModel;
