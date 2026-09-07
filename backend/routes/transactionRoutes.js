import {
    getTransaction,
    addTransaction,
    updateTransaction,
    deleteTransaction
} from '../controllers/transactionController.js';
import protect from '../middlewares/authMiddleware.js'
import { Router } from 'express';

const transactionRoute = Router();

transactionRoute.get('/',protect,getTransaction);
transactionRoute.post('/',protect,addTransaction);
transactionRoute.put('/:id',protect,updateTransaction);
transactionRoute.delete('/:id',protect,deleteTransaction);

export default transactionRoute;

