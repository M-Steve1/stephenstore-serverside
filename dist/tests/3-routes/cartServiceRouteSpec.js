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
const server_1 = __importDefault(require("../../server"));
const supertest_1 = __importDefault(require("supertest"));
const userService_1 = require("../../services/userService");
const request = (0, supertest_1.default)(server_1.default);
const userService = new userService_1.UserService();
describe('Cart Service Route', () => {
    it('Expect /cart/show-cart/:id endpoint to return a statusCode of 200', () => __awaiter(void 0, void 0, void 0, function* () {
        const token = yield userService.createToken({ userId: 1 });
        yield request
            .get('/cart/show-cart/1')
            .set('Authorization', 'bearer ' + token)
            .expect(200);
    }));
    it('Expect /cart/products-in-cart/:id endpoint to return a statusCode of 200', () => __awaiter(void 0, void 0, void 0, function* () {
        const token = yield userService.createToken({ userId: 1 });
        yield request
            .get('/cart/products-in-cart/1')
            .set('Authorization', 'bearer ' + token)
            .expect(200);
    }));
    it('Expect /cart/show-product-cart endpoint to return a statusCode of 200', () => __awaiter(void 0, void 0, void 0, function* () {
        const token = yield userService.createToken({ userId: 1 });
        yield request
            .post('/cart/show-product-cart')
            .set('Authorization', 'bearer ' + token)
            .send({
            cart_id: 1,
            product_id: 1
        })
            .expect(200);
    }));
    it('Expect /cart/count-products-in-cart/:id endpoint to return a statusCode of 200', () => __awaiter(void 0, void 0, void 0, function* () {
        const token = yield userService.createToken({ userId: 1 });
        yield request
            .get('/cart/count-products-in-cart/1')
            .set('Authorization', 'bearer ' + token)
            .expect(200);
    }));
});
