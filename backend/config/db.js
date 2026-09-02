import mongoose from "mongoose";

const connectDb =async () => {
    await mongoose.connect(process.env.DATABASE_URL)
    .then(()=>{
        console.log("DB is connected successfully");
    })        
    .catch((err)=>{
        console.log(err.message);
    })
}

export default connectDb;