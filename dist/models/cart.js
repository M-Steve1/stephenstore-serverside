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
exports.CartStore = void 0;
const database_1 = __importDefault(require("../database"));
class CartStore {
    create(cart) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { data, error, status } = yield database_1.default
                    .from("carts")
                    .insert({ user_id: parseInt(cart.user_id), status: cart.status.toLowerCase() })
                    .select();
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
    updateCartStatus(cart) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { data, error, status } = yield database_1.default
                    .from("carts")
                    .update({ status: cart.status.toLowerCase() })
                    .match({ user_id: cart.user_id, status: 'active' })
                    .select();
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
    addProductsToCart(productToAdd) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { data, error, status } = yield database_1.default
                    .from("cart_products")
                    .insert({ cart_id: parseInt(productToAdd.cart_id), product_id: parseInt(productToAdd.product_id), product_quantity: productToAdd.product_quantity })
                    .select();
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
    updateProductQuantity(id, quantity) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { data, error, status } = yield database_1.default
                    .from("cart_products")
                    .update({ product_quantity: quantity })
                    .eq("id", id)
                    .select();
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
    removeItemFromCart(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { data, error, status } = yield database_1.default
                    .from("cart_products")
                    .delete()
                    .eq("id", id)
                    .select();
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
}
exports.CartStore = CartStore;
