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
describe('Cart Route', () => {
    it('Expects /cart/create endpoint to return 201 statusCode', () => __awaiter(void 0, void 0, void 0, function* () {
        const token = yield userService.createToken({ userId: 1 });
        yield request
            .post('/cart/create')
            .set('Authorization', 'bearer ' + token)
            .send({
            status: 'active',
            user_id: 1
        })
            .expect(201);
    }));
    it('Expects /cart/add-product endpoint to return 200 statusCode', () => __awaiter(void 0, void 0, void 0, function* () {
        const token = yield userService.createToken({ userId: 1 });
        yield request
            .post('/cart/add-product')
            .set('Authorization', 'bearer ' + token)
            .send({
            cart_id: 2,
            product_id: 1,
            product_quantity: 2
        })
            .expect(200);
    }));
    it('Expects /cart/update-cart-status/:id endpoint to return 200 statusCode', () => __awaiter(void 0, void 0, void 0, function* () {
        const token = yield userService.createToken({ userId: 1 });
        yield request
            .put(`/cart/update-cart-status/1`)
            .set('Authorization', 'bearer ' + token)
            .send({
            cartStatus: 'completed'
        })
            .expect(200);
    }));
    it('Expects /cart/update-product-quantity endpoint to return 200 statusCode', () => __awaiter(void 0, void 0, void 0, function* () {
        const token = yield userService.createToken({ userId: 1 });
        yield request
            .put('/cart/update-product-quantity')
            .set('Authorization', 'bearer ' + token)
            .send({
            id: 2,
            product_quantity: 5
        })
            .expect(200);
    }));
    it('Expects /cart/delete/:id endpoint to return 200 statusCode', () => __awaiter(void 0, void 0, void 0, function* () {
        const token = yield userService.createToken({ userId: 1 });
        yield request
            .delete('/cart/delete/2')
            .set('Authorization', 'bearer ' + token)
            .expect(200);
    }));
});
//# sourceMappingURL=cartRouteSpec.js.map