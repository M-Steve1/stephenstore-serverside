import  express  from "express";
import { countProductsInCart, getCartByUserId, getProductsInCart, isProductInCart } from "../controllers/cartServiceController";
import { idAuth } from "../middleware/idAuth";
import { tokenAuth } from "../middleware/tokenAuth";

const cartServiceRoute = express.Router();

cartServiceRoute.get('/show-cart/:id', idAuth, getCartByUserId);
cartServiceRoute.get('/products-in-cart/:id', tokenAuth, getProductsInCart);
cartServiceRoute.post('/show-product-cart', tokenAuth, isProductInCart);
cartServiceRoute.get('/count-products-in-cart/:id', tokenAuth, countProductsInCart);

export default cartServiceRoute;

