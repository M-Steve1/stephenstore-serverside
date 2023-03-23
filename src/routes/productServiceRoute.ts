import express from 'express';
import {
  allProductCategories,
  fiveMostPopularProducts,
  productsByCategory,
  productByName
} from '../controllers/productServiceController';

const productServiceRouter = express.Router();

productServiceRouter.get('/category/:category', productsByCategory);
productServiceRouter.get('/show-product/:name', productByName);
productServiceRouter.get('/all-categories', allProductCategories);
// productServiceRouter.get(
//   '/five_most_popular_products',
//   fiveMostPopularProducts
// );

export default productServiceRouter;
