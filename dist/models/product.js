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
exports.ProductStore = void 0;
const database_1 = __importDefault(require("../database"));
class ProductStore {
    index() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { data, error, status } = yield database_1.default
                    .from("products")
                    .select();
                if (data !== null)
                    return data;
                else
                    return null;
            }
            catch (error) {
                throw new Error(`Cannot fetch products:${error}`);
            }
        });
    }
    show(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { data, error, status } = yield database_1.default
                    .from("products")
                    .select()
                    .eq("id", id);
                if (data !== null)
                    return data[0];
                else
                    return null;
            }
            catch (error) {
                throw new Error(`Cannot fetch the product:${error}`);
            }
        });
    }
    create(p) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { data, error, status } = yield database_1.default
                    .from("products")
                    .insert({ name: p.name, price: p.price, category: p.category.toLowerCase(), url: p.url, description: p.description })
                    .select();
                if (data !== null)
                    return data[0];
                else
                    return null;
            }
            catch (error) {
                throw new Error(`Cannot Create the product: ${error}`);
            }
        });
    }
}
exports.ProductStore = ProductStore;
