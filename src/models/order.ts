import client from '../database';

export type Order = {
  id?: number;
  user_id: number;
  cart_id: number;
  status: string;
};

export class OrderStore {
  async createOrder(order: Order): Promise<Order | null> {
    try {
      const { data, error, status } = await client
        .from('orders')
        .insert({
          user_id: order.user_id,
          cart_id: order.cart_id,
          status: order.status.toLowerCase()
        })
        .select()
        .single();

      if (data !== null) return data as Order;
      else return null;
    } catch (error) {
      throw new Error(`${error}`);
    }
  }
}
