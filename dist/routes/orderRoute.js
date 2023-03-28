"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const orderController_1 = require("../controllers/orderController");
const idAuth_1 = require("../middleware/idAuth");
const orderRouter = express_1.default.Router();
orderRouter.post('/create-order/:id', idAuth_1.idAuth, orderController_1.createOrder);
exports.default = orderRouter;
