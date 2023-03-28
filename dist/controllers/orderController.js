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
exports.createOrder = void 0;
const order_1 = require("../models/order");
const orderStore = new order_1.OrderStore();
const createOrder = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userId = req.params.id;
        const { cartId, status } = req.body;
        const order = {
            user_id: parseInt(userId),
            cart_id: parseInt(cartId),
            status: status
        };
        const createdOrder = yield orderStore.createOrder(order);
        res.status(201).json(createdOrder);
    }
    catch (error) {
        res.status(400).json(`${error}`);
    }
});
exports.createOrder = createOrder;
//# sourceMappingURL=orderController.js.map