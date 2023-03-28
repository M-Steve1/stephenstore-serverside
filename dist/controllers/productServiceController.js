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
exports.allProductCategories = exports.productByName = exports.productsByCategory = void 0;
const productService_1 = require("../services/productService");
const productService = new productService_1.ProductService();
const productsByCategory = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const category = req.params.category;
        const products = yield productService.productsByCategory(category);
        if ((products === null || products === void 0 ? void 0 : products.length) === 0 || products === null) {
            res.status(400).json('category does not exist');
        }
        else {
            res.status(200).json(products);
        }
    }
    catch (error) {
        throw new Error(`${error}`);
    }
});
exports.productsByCategory = productsByCategory;
const productByName = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const productName = req.params.name;
        const product = yield productService.getProductByName(productName);
        if (product === null || (product === null || product === void 0 ? void 0 : product.length) === 0) {
            res.status(400).json('Product does not exist');
        }
        else {
            res.status(200).json(product);
        }
    }
    catch (error) {
        throw new Error(`${error}`);
    }
});
exports.productByName = productByName;
const allProductCategories = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const allCategories = yield productService.allProductCategories();
        res.status(200).json(allCategories);
    }
    catch (error) {
        throw new Error(`${error}`);
    }
});
exports.allProductCategories = allProductCategories;
//# sourceMappingURL=productServiceController.js.map