import client from "../database";

export type Order = {
  id?: number,
  userId: string,
  cartId: string,
  status: string
}

export class OrderStore {
  async createOrder(order: Order): Promise<Order> {
    let conn; 
    try {
      conn = await client.connect();
      const sql = 'INSERT INTO orders(user_id, cart_id, status) VALUES($1, $2, $3) RETURNING *';
      const result = await conn.query(sql, [order.userId, order.cartId, order.status]);
      return result.rows[0];
    } catch (error) {
      throw new Error(`${error}`);
    } finally {
      conn?.release;
    }
  }
}