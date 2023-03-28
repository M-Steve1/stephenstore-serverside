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
const userService = new userService_1.UserService();
const request = (0, supertest_1.default)(server_1.default);
describe('User route', () => {
    it('Expects index endpoint to return 200 statusCode', () => __awaiter(void 0, void 0, void 0, function* () {
        const token = yield userService.createToken({ userId: 1 });
        yield request
            .get('/user/index')
            .set('Authorization', 'bearer ' + token)
            .expect(200);
    }));
    it('Expects user/show/:id endpoint to return 200 statusCode', () => __awaiter(void 0, void 0, void 0, function* () {
        const token = yield userService.createToken({ userId: 1 });
        yield request
            .get('/user/show/1')
            .set('Authorization', 'bearer ' + token)
            .expect(200);
    }));
    it('Expects signup endpoint to return 201 statusCode', () => __awaiter(void 0, void 0, void 0, function* () {
        yield request
            .post('/user/signup')
            .send({
            first_name: 'Awe',
            last_name: 'Lanre',
            user_name: 'Alanre1100',
            password: 'password'
        })
            .expect(201);
    }));
    it('Expects signup endpoint to return 400 statusCode', () => __awaiter(void 0, void 0, void 0, function* () {
        yield request
            .post('/user/signup')
            .send({
            first_name: 'Awe',
            last_name: 'Lanre',
            user_name: 'Msteve1',
            password: 'password'
        })
            .expect(400);
    }));
    it('Expects signin endpoint to return 200 statusCode', () => __awaiter(void 0, void 0, void 0, function* () {
        yield request
            .post('/user/signin')
            .send({
            user_name: 'Msteve1',
            password: 'password'
        })
            .expect(200);
    }));
    it('Expects signin endpoint to return 400 statusCode', () => __awaiter(void 0, void 0, void 0, function* () {
        yield request
            .post('/user/signin')
            .send({
            user_name: 'Msteve1',
            password: 'passwordgghh'
        })
            .expect(400);
    }));
});
