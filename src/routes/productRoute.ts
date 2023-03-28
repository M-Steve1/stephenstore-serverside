import express from 'express';
import {
  create,
  getProductById,
  index
} from '../controllers/productController';
import { tokenAuth } from '../middleware/tokenAuth';

const productRouter = express.Router();

productRouter.get('/index', index);
productRouter.get('/show/:id', getProductById);
productRouter.post('/create', tokenAuth, create);

export default productRouter;
