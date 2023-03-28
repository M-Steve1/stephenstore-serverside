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
const productService_1 = require("../../services/productService");
const productService = new productService_1.ProductService();
describe('Produce service', () => {
    it('Should return products under the specified category', () => __awaiter(void 0, void 0, void 0, function* () {
        const result = yield productService.productsByCategory("games");
        expect(result).toEqual([{
                id: 1,
                name: 'ps5',
                price: 25.60,
                category: 'games',
                url: "http://games.com",
                description: "Can take your whole day"
            }]);
    }));
    it('Should return empty array because category does not exist', () => __awaiter(void 0, void 0, void 0, function* () {
        const result = yield productService.productsByCategory("makeup");
        expect(result).toEqual([]);
    }));
    it('Should get products by name', () => __awaiter(void 0, void 0, void 0, function* () {
        const result = yield productService.getProductByName("ps5");
        expect(result).toEqual([{
                id: 1,
                name: 'ps5',
                price: 25.60,
                category: 'games',
                url: "http://games.com",
                description: "Can take your whole day"
            }]);
    }));
    it('Should return products that have this string in their name', () => __awaiter(void 0, void 0, void 0, function* () {
        const result = yield productService.getProductByName("5");
        expect(result).toEqual([{
                id: 1,
                name: 'ps5',
                price: 25.60,
                category: 'games',
                url: "http://games.com",
                description: "Can take your whole day"
            }]);
    }));
    it('Expect to be an empty string because no products have this string their name', () => __awaiter(void 0, void 0, void 0, function* () {
        const result = yield productService.getProductByName("xyz");
        expect(result).toEqual([]);
    }));
    it('Should return all products categories', () => __awaiter(void 0, void 0, void 0, function* () {
        const result = yield productService.allProductCategories();
        expect(result).toEqual([{
                category: 'games',
            }]);
    }));
});
//# sourceMappingURL=productServiceSpec.js.map