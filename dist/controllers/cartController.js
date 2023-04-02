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
exports.removeItemFromCart = exports.updateProductQuantity = exports.addProductsToCart = exports.updateCartStatus = exports.create = void 0;
const cart_1 = require("../models/cart");
const cartService_1 = require("../services/cartService");
const cartStore = new cart_1.CartStore();
const cartService = new cartService_1.CartServiceStore();
const create = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { status, user_id } = req.body;
        const createdCart = yield cartStore.create({ status, user_id });
        res.status(201).json(createdCart);
    }
    catch (error) {
        res.status(400).json('Could not create cart');
    }
});
exports.create = create;
const updateCartStatus = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { cartStatus } = req.body;
        const user_id = req.params.id;
        const cart = {
            user_id: parseInt(user_id),
            status: cartStatus
        };
        const updatedCart = yield cartStore.updateCartStatus(cart);
        res.status(200).json(updatedCart);
    }
    catch (error) {
        res.status(400).json('Could not update cart');
    }
});
exports.updateCartStatus = updateCartStatus;
const addProductsToCart = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { cart_id, product_id, product_quantity } = req.body;
        const isProductInCart = yield cartService.isProductInCart(parseInt(cart_id), parseInt(product_id));
        if (isProductInCart === null) {
            const addedProduct = yield cartStore.addProductsToCart({
                cart_id,
                product_id,
                product_quantity
            });
            res.status(200).json(addedProduct);
        }
        else {
            const updatedProduct = yield cartStore.updateProductQuantity(parseInt(isProductInCart.id), parseInt(isProductInCart.product_quantity) +
                parseInt(product_quantity));
            res.status(200).json(updatedProduct);
        }
    }
    catch (error) {
        res.status(400).json('Could not add Product to cart');
    }
});
exports.addProductsToCart = addProductsToCart;
const updateProductQuantity = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id, product_quantity } = req.body;
        const updatedProduct = yield cartStore.updateProductQuantity(parseInt(id), product_quantity);
        res.status(200).json(updatedProduct);
    }
    catch (error) {
        res.status(400).json('Could not update product quantity');
    }
});
exports.updateProductQuantity = updateProductQuantity;
const removeItemFromCart = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const deletedProduct = yield cartStore.removeItemFromCart(parseInt(id));
        res.status(200).json(deletedProduct);
    }
    catch (error) {
        res.status(400).json('Could not delete item from cart');
    }
});
exports.removeItemFromCart = removeItemFromCart;
//# sourceMappingURL=cartController.js.map