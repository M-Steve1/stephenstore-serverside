import  express  from "express";
import { addProductsToCart, create, removeItemFromCart, updateCartStatus, updateProductQuantity } from "../controllers/cartController";
import { idAuth } from "../middleware/idAuth";
import { tokenAuth } from "../middleware/tokenAuth";

const cartRoute = express.Router();

cartRoute.post('/create', tokenAuth, create);
cartRoute.post('/add-product', tokenAuth, addProductsToCart);
cartRoute.put('/update-cart-status/:id', idAuth, updateCartStatus);
cartRoute.put('/update-product-quantity', tokenAuth, updateProductQuantity);
cartRoute.delete('/delete/:id', tokenAuth, removeItemFromCart);

export default cartRoute;

