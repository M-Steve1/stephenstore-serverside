"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.countProductsInCart = exports.getProductsInCart = exports.isProductInCart = exports.getCartByUserId = void 0;
const cartService_1 = require("../services/cartService");
const cartServiceStore = new cartService_1.CartServiceStore();
const getCartByUserId = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user_id = req.params.id;
        const cart = yield cartServiceStore.getCartByUserId(parseInt(user_id));
        res.status(200).json(cart);
    }
    catch (error) {
        res.status(400).json("Something went wrong");
    }
});
exports.getCartByUserId = getCartByUserId;
const isProductInCart = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { cart_id, product_id } = req.body;
        const result = yield cartServiceStore.isProductInCart(parseInt(cart_id), parseInt(product_id));
        res.status(200).json(result);
    }
    catch (error) {
        res.status(400).json(`${error}`);
    }
});
exports.isProductInCart = isProductInCart;
const getProductsInCart = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const cart_id = req.params.id;
        const result = yield cartServiceStore.getProductsInCart(parseInt(cart_id));
        res.status(200).json(result);
    }
    catch (error) {
        res.status(400).json(`${error}`);
    }
});
exports.getProductsInCart = getProductsInCart;
const countProductsInCart = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const cart_id = req.params.id;
        const result = yield cartServiceStore.countProductsInCart(parseInt(cart_id));
        res.status(200).json(result);
    }
    catch (error) {
        res.status(400).json("Something went wrong");
    }
});
exports.countProductsInCart = countProductsInCart;
//# sourceMappingURL=cartServiceController.js.map