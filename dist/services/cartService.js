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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CartServiceStore = void 0;
const database_1 = __importDefault(require("../database"));
class CartServiceStore {
    getCartByUserId(user_id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { data, error, status } = yield database_1.default
                    .from('carts')
                    .select()
                    .match({ user_id: user_id, status: 'active' });
                if (data !== null)
                    return data[0];
                else
                    return null;
            }
            catch (error) {
                throw new Error(`${error}`);
            }
        });
    }
    isProductInCart(cart_id, product_id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { data, error, status } = yield database_1.default
                    .from('cart_products')
                    .select()
                    .match({ cart_id: cart_id, product_id: product_id });
                if (data !== null)
                    return data[0];
                else
                    return null;
            }
            catch (error) {
                throw new Error(`${error}`);
            }
        });
    }
    getProductsInCart(cart_id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { data, error, status } = yield database_1.default
                    .from('cart_products')
                    .select()
                    .eq('cart_id', cart_id);
                if (data !== null)
                    return data;
                else
                    return null;
            }
            catch (error) {
                throw new Error(`${error}`);
            }
        });
    }
    countProductsInCart(cart_id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { count, error } = yield database_1.default
                    .from('cart_products')
                    .select('*', { count: 'exact', head: true })
                    .eq('cart_id', cart_id);
                const cartCount = { count: count };
                if (count !== null)
                    return cartCount;
                else
                    return null;
            }
            catch (err) {
                throw new Error(`Something went wrong ${err}`);
            }
        });
    }
}
exports.CartServiceStore = CartServiceStore;
//# sourceMappingURL=cartService.js.map