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
const cart_1 = require("../../models/cart");
const cartStore = new cart_1.CartStore();
describe('Cart Model', () => {
    beforeAll(() => __awaiter(void 0, void 0, void 0, function* () {
        const result = yield cartStore.create({
            user_id: 1,
            status: 'active'
        });
        expect(result).toEqual({
            id: 1,
            user_id: 1,
            status: 'active'
        });
    }));
    it('create method should be defined', () => {
        expect(cartStore.create).toBeDefined();
    });
    it('updateCartStatus method should be defined', () => {
        expect(cartStore.updateCartStatus).toBeDefined();
    });
    it('addProductToCart method should be defined', () => {
        expect(cartStore.addProductsToCart).toBeDefined();
    });
    it('updateProductQuantity method should be defined', () => {
        expect(cartStore.updateProductQuantity).toBeDefined();
    });
    it('removeItemFromCart method should be defined', () => {
        expect(cartStore.removeItemFromCart).toBeDefined();
    });
    it('Should add product to cart', () => __awaiter(void 0, void 0, void 0, function* () {
        const result = yield cartStore.addProductsToCart({
            cart_id: 1,
            product_id: 1,
            product_quantity: 2
        });
        expect(result).toEqual({
            id: 1,
            cart_id: 1,
            product_id: 1,
            product_quantity: 2
        });
    }));
    afterAll(() => __awaiter(void 0, void 0, void 0, function* () {
        const resultOne = yield cartStore.updateCartStatus({
            id: 1,
            user_id: 1,
            status: 'completed'
        });
        expect(resultOne).toEqual({
            id: 1,
            user_id: 1,
            status: 'completed'
        });
        const resultTwo = yield cartStore.updateProductQuantity(1, 5);
        expect(resultTwo).toEqual({
            id: 1,
            cart_id: 1,
            product_id: 1,
            product_quantity: 5
        });
        const removedItem = yield cartStore.removeItemFromCart(1);
        expect(removedItem).toEqual({
            id: 1,
            cart_id: 1,
            product_id: 1,
            product_quantity: 5
        });
    }));
});
//# sourceMappingURL=3-cartSpec.js.map