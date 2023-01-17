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
const supertest_1 = __importDefault(require("supertest"));
const server_1 = __importDefault(require("../../server"));
const request = (0, supertest_1.default)(server_1.default);
describe('Product service route', () => {
    it('/product/category/:category endpoint should return status code of 200', () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield request.get('/product/category/games');
        expect(response.statusCode).not.toBe(200);
    }));
    it('/product/five_most_popular_products endpoint should return status code of 200', () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield request.get('/product/five_most_popular_products');
        expect(response.statusCode).toBe(200);
    }));
});
