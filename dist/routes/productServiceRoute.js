"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const productServiceController_1 = require("../controllers/productServiceController");
const productServiceRouter = express_1.default.Router();
productServiceRouter.get('/category/:category', productServiceController_1.productsByCategory);
productServiceRouter.get('/show-product/:name', productServiceController_1.productByName);
productServiceRouter.get('/all-categories', productServiceController_1.allProductCategories);
exports.default = productServiceRouter;
