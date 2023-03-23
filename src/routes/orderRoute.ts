import express from "express";
import { createOrder } from "../controllers/orderController";
import { idAuth } from "../middleware/idAuth";
const orderRouter = express.Router();

orderRouter.post('/create-order/:id', idAuth, createOrder);

export default orderRouter;