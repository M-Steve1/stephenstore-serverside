import { Request, Response } from 'express';
import { Order, OrderStore } from '../models/order';

const orderStore = new OrderStore();

export const createOrder = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const userId = req.params.id;
    const { cartId, status } = req.body;
    const order: Order = {
      user_id: parseInt(userId),
      cart_id: parseInt(cartId),
      status: status
    };
    const createdOrder = await orderStore.createOrder(order);
    res.status(201).json(createdOrder);
  } catch (error) {
    res.status(400).json(`${error}`);
  }
};
