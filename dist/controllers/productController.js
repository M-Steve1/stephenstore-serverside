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
exports.create = exports.getProductById = exports.index = void 0;
const product_1 = require("../models/product");
// import { data } from '../data'
const productStore = new product_1.ProductStore();
const index = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const products = yield productStore.index();
        res.status(200).json(products);
    }
    catch (error) {
        throw new Error(`${error}`);
    }
});
exports.index = index;
const getProductById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const theProduct = yield productStore.show(parseInt(id));
        res.status(200).json(theProduct);
    }
    catch (error) {
        res.status(400).json(`cannot get the product: ${error}`);
    }
});
exports.getProductById = getProductById;
const create = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name, price, category, url, description } = req.body;
        const product = {
            name: name,
            price: parseFloat(price),
            category: category,
            url: url,
            description: description
        };
        const createdProduct = yield productStore.create(product);
        res.status(201).json(createdProduct);
    }
    catch (error) {
        throw new Error(`${error}`);
    }
});
exports.create = create;
/*
  use this code to populate your DB with products
*/
/*
  data.forEach((d) => {
  const product: Product = {
    name: d.name,
    price: d.price,
    category: d.category,
    url: d.url,
    description: d.description
  }

  productStore.create(product);
})
*/ 
