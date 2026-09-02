import cors from 'cors';
import express from 'express';
import 'dotenv/config';
import connectDb from './config/db.js';

const app = express();
app.use(cors());
app.use(express.json());




connectDb()
.then(()=>{
    app.listen(process.env.PORT,()=>{
        console.log(`server is running on the port: ${process.env.PORT}`);
    });
})
.catch((err)=>console.log(err.message))
