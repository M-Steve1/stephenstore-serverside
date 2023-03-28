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
const order_1 = require("../../models/order");
const orderStore = new order_1.OrderStore();
describe('Order model', () => {
    it('Should have a create method', () => {
        expect(orderStore.createOrder).toBeDefined();
    });
    it('Should create and return created order', () => __awaiter(void 0, void 0, void 0, function* () {
        const result = yield orderStore.createOrder({
            user_id: 1,
            cart_id: 1,
            status: 'open'
        });
        expect(result).toEqual({
            id: 1,
            user_id: 1,
            cart_id: 1,
            status: 'open'
        });
    }));
});
