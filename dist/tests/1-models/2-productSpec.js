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
const product_1 = require("../../models/product");
const productStore = new product_1.ProductStore();
describe('Product model', () => {
    it('Should have an index method', () => {
        expect(productStore.index).toBeDefined();
    });
    it('Should have a show method', () => {
        expect(productStore.show).toBeDefined();
    });
    it('Should have a create method', () => {
        expect(productStore.create).toBeDefined();
    });
    it('Should return all the products', () => __awaiter(void 0, void 0, void 0, function* () {
        const result = yield productStore.index();
        expect(result).toEqual([
            {
                id: 1,
                name: 'ps5',
                price: 25.60,
                category: 'games',
                url: "http://games.com",
                description: "Can take your whole day"
            }
        ]);
    }));
    it('Should return the specified(id) product', () => __awaiter(void 0, void 0, void 0, function* () {
        const result = yield productStore.show(1);
        expect(result).toEqual({
            id: 1,
            name: 'ps5',
            price: 25.60,
            category: 'games',
            url: "http://games.com",
            description: "Can take your whole day"
        });
    }));
    beforeAll(() => __awaiter(void 0, void 0, void 0, function* () {
        const result = yield productStore.create({
            name: 'ps5',
            price: 25.60,
            category: 'games',
            url: "http://games.com",
            description: "Can take your whole day"
        });
        expect(result).toEqual({
            id: 1,
            name: 'ps5',
            price: 25.60,
            category: 'games',
            url: "http://games.com",
            description: "Can take your whole day"
        });
    }));
});
//# sourceMappingURL=2-productSpec.js.map