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
const userService_1 = require("../../services/userService");
const userService = new userService_1.UserService();
const request = (0, supertest_1.default)(server_1.default);
describe('Product route', () => {
    it('Expects index endpoint to return 200 statusCode', () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield request.get('/product/index');
        expect(response.statusCode).toBe(200);
    }));
    it('Expects show endpoint to return 200 statusCode', () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield request.get('/product/show/1');
        expect(response.statusCode).toBe(200);
    }));
    it('Expects create endpoint to return 201 statusCode', () => __awaiter(void 0, void 0, void 0, function* () {
        const token = userService.createToken({ userId: '1' });
        request
            .post('/product/create')
            .set('Authorization', 'bearer ' + token)
            .send({
            name: 'Jeans',
            price: 7000,
            category: 'clothing'
        })
            .expect(201);
    }));
});
//# sourceMappingURL=productRouteSpec.js.map