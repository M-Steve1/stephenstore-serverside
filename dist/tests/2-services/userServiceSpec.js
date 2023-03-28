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
const userService_1 = require("../../services/userService");
const userService = new userService_1.UserService();
describe('User service', () => {
    it('Should return true if the user name is taken', () => __awaiter(void 0, void 0, void 0, function* () {
        const isTaken = yield userService.isUserNameTaken('Msteve1');
        expect(isTaken).toBe(true);
    }));
    it('Should return false because user name is not taken', () => __awaiter(void 0, void 0, void 0, function* () {
        const isTaken = yield userService.isUserNameTaken('Msteve100');
        expect(isTaken).toBe(false);
    }));
    it('Should return a token and not an empty string', () => __awaiter(void 0, void 0, void 0, function* () {
        const token = yield userService.createToken({ userId: '1' });
        expect(token).toBeInstanceOf(String);
    }));
});
