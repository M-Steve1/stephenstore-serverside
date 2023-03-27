import express from 'express';
import {
  allProductCategories,
  productsByCategory,
  productByName
} from '../controllers/productServiceController';

const productServiceRouter = express.Router();

productServiceRouter.get('/category/:category', productsByCategory);
productServiceRouter.get('/show-product/:name', productByName);
productServiceRouter.get('/all-categories', allProductCategories);

export default productServiceRouter;
