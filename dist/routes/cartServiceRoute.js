"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cartServiceController_1 = require("../controllers/cartServiceController");
const idAuth_1 = require("../middleware/idAuth");
const tokenAuth_1 = require("../middleware/tokenAuth");
const cartServiceRoute = express_1.default.Router();
cartServiceRoute.get('/show-cart/:id', idAuth_1.idAuth, cartServiceController_1.getCartByUserId);
cartServiceRoute.get('/products-in-cart/:id', tokenAuth_1.tokenAuth, cartServiceController_1.getProductsInCart);
/*
    This is post because it has a body used for getting the product needed
*/
cartServiceRoute.post('/show-product-cart', tokenAuth_1.tokenAuth, cartServiceController_1.isProductInCart);
cartServiceRoute.get('/count-products-in-cart/:id', tokenAuth_1.tokenAuth, cartServiceController_1.countProductsInCart);
exports.default = cartServiceRoute;
