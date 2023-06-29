import express from 'express';
import {
  countProductsInCart,
  getCartByUserId,
  getProductsInCart,
  isProductInCart
} from '../controllers/cartServiceController';
import { idAuth } from '../middleware/idAuth';
import { tokenAuth } from '../middleware/tokenAuth';

const cartServiceRoute = express.Router();

cartServiceRoute.get('/show-cart/:id', idAuth, getCartByUserId);
cartServiceRoute.get('/products-in-cart/:id', tokenAuth, getProductsInCart);
/* 
    This is post because it has a body used for getting the product needed
*/
cartServiceRoute.post('/show-product-in-cart', tokenAuth, isProductInCart);
cartServiceRoute.get(
  '/count-products-in-cart/:id',
  tokenAuth,
  countProductsInCart
);

export default cartServiceRoute;
