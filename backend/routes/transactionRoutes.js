import {
    getTransaction,
    addTransaction,
    updateTransaction,
    deleteTransaction
} from '../controllers/transactionController.js';
import protect from '../middlewares/authMiddleware.js'
import { Router } from 'express';

const transactionRoute = Router();

transactionRouter.get('/',protect,getTransaction);
transactionRouter.post('/',protect,addTransaction);
transactionRouter.put('/:id',protect,updateTransaction);
transactionRouter.delete('/:id',protect,deleteTransaction);

export default transactionRoute;

