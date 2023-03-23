import client from "../database";

export type Cart = {
    id?: string | number,
    user_id: string,
    status: string
}

export class CartServiceStore {
    async getCartByUserId(user_id: string): Promise<Cart> {
        let conn;
        try {
            const sql = 'SELECT * FROM carts WHERE user_id=($1) AND status=($2)';
            conn = await client.connect();
            const result = await client.query(sql, [user_id, 'active']);
            return result.rows[0];
        } catch (error) {
            throw new Error(`${error}`);
        } finally {
            if (conn !== undefined) {
                conn.release();
            }
        }
    }

    async isProductInCart(productInCart: {cart_id: string, product_id: string}): Promise<{id: string | number, cart_id: string, product_id: string, product_quantity: number}> {
        let conn;
        try {
            const sql = 'SELECT * FROM cart_products WHERE cart_id=($1) AND product_id=($2)';
            conn = await client.connect();
            const result = await client.query(sql, [productInCart.cart_id, productInCart.product_id]);
            return result.rows[0];
        } catch (error) {
            throw new Error(`${error}`);
        } finally {
            if (conn !== undefined) {
                conn.release();
            }
        }
    }

    async getProductsInCart(cart_id: string): Promise<{id: string | number, cart_id: string, product_id: string, product_quantity: number}[]> {
        let conn;
        try {
            const sql = 'SELECT * FROM cart_products WHERE cart_id=($1)';
            conn = await client.connect();
            const result = await client.query(sql, [cart_id]);
            return result.rows;
        } catch (error) {
            throw new Error(`${error}`);
        } finally {
            if (conn !== undefined) {
                conn.release();
            }
        }
    }

    async countProductsInCart(cart_id: string): Promise<{count: number}> {
        let conn;
        try{
          const sql = 'SELECT COUNT (*) AS count FROM cart_products WHERE cart_id=($1)';
          conn = await client.connect();
          const result = await client.query(sql, [cart_id]);
          return result.rows[0];
        } catch(err) {
          throw new Error(`Something went wrong ${err}`);
        } finally {
          if (conn !== undefined) {
              conn.release();
          }
      }
      }
}