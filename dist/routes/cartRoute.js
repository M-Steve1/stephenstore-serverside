"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cartController_1 = require("../controllers/cartController");
const idAuth_1 = require("../middleware/idAuth");
const tokenAuth_1 = require("../middleware/tokenAuth");
const cartRoute = express_1.default.Router();
cartRoute.post('/create', tokenAuth_1.tokenAuth, cartController_1.create);
cartRoute.post('/add-product', tokenAuth_1.tokenAuth, cartController_1.addProductsToCart);
cartRoute.put('/update-cart-status/:id', idAuth_1.idAuth, cartController_1.updateCartStatus);
cartRoute.put('/update-product-quantity', tokenAuth_1.tokenAuth, cartController_1.updateProductQuantity);
cartRoute.delete('/delete/:id', tokenAuth_1.tokenAuth, cartController_1.removeItemFromCart);
exports.default = cartRoute;
