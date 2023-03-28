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
const cartService_1 = require("../../services/cartService");
const cart_1 = require("../../models/cart");
const cartStore = new cart_1.CartStore();
const cartServiceStore = new cartService_1.CartServiceStore();
describe("Cart Service", () => {
    beforeAll(() => __awaiter(void 0, void 0, void 0, function* () {
        const result = yield cartStore.create({
            user_id: 1,
            status: "active"
        });
        expect(result).toEqual({
            id: 2,
            user_id: 1,
            status: "active"
        });
    }));
    it('getCartByUserId method should be defined', () => {
        expect(cartServiceStore.getCartByUserId).toBeDefined();
    });
    it('isProductInCart method should be defined', () => {
        expect(cartServiceStore.isProductInCart).toBeDefined();
    });
    it('getProductsInCart method should be defined', () => {
        expect(cartServiceStore.getProductsInCart).toBeDefined();
    });
    it('countProductsInCart method should be defined', () => {
        expect(cartServiceStore.countProductsInCart).toBeDefined();
    });
    it("Should return user's active cart", () => __awaiter(void 0, void 0, void 0, function* () {
        const result = yield cartServiceStore.getCartByUserId(1);
        expect(result).not.toEqual({
            id: 1,
            user_id: 1,
            status: "completed"
        });
        expect(result).toEqual({
            id: 2,
            user_id: 1,
            status: "active"
        });
    }));
    it("Should return product if in cart", () => __awaiter(void 0, void 0, void 0, function* () {
        const isProductInCart = yield cartServiceStore.isProductInCart(2, 1);
        expect(isProductInCart).not.toEqual({
            id: 2,
            cart_id: 2,
            product_id: 1,
            product_quantity: 2
        });
        yield cartStore.addProductsToCart({
            cart_id: 2,
            product_id: 1,
            product_quantity: 2
        });
        const isInCart = yield cartServiceStore.isProductInCart(2, 1);
        expect(isInCart).toEqual({
            id: 2,
            cart_id: 2,
            product_id: 1,
            product_quantity: 2
        });
    }));
    afterAll(() => __awaiter(void 0, void 0, void 0, function* () {
        const result = yield cartServiceStore.getProductsInCart(2);
        expect(result).toEqual([{
                id: 2,
                cart_id: 2,
                product_id: 1,
                product_quantity: 2
            }]);
        const count = yield cartServiceStore.countProductsInCart(2);
        expect(count).toEqual({ count: 1 });
        const countTwo = yield cartServiceStore.countProductsInCart(1);
        expect(countTwo).toEqual({ count: 0 });
    }));
});
//# sourceMappingURL=cartServiceSpec.js.map