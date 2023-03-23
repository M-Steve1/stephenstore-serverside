import client from "../database";

export type Cart = {
    id?: string | number,
    user_id: string,
    status: string
}

export class CartStore {
    async create (cart: Cart): Promise<Cart>  {
        let conn;
        try {
            const sql = 'INSERT INTO carts(status, user_id) VALUES($1, $2) RETURNING *';
            conn = await client.connect();
            const result = await conn.query(sql, [cart.status.toLowerCase(), cart.user_id]);
            return result.rows[0];
        } catch (error) {
            throw new Error(`${error}`);
        } finally {
            if (conn !== undefined) {
                conn.release();
            }
            
        }
    }

    async updateCartStatus (cart: Cart): Promise<Cart>  {
        let conn;
        try {
            const sql = 'UPDATE carts SET status=($1) WHERE user_id=($2) AND status=($3) RETURNING *';
            conn = await client.connect();
            const result = await conn.query(sql, [cart.status.toLowerCase(), cart.user_id, "active"]);
            return result.rows[0];
        } catch (error) {
            throw new Error(`${error}`);
        } finally {
            if (conn !== undefined) {
                conn.release();
            }
            
        }
    }

    async addProductsToCart(productToAdd: {cart_id: string, product_id: string, product_quantity: number}): Promise<{cart_id: string, product_id: string, product_quantity: number}>{
        let conn;
        try {
            const sql = 'INSERT INTO cart_products(cart_id, product_id, product_quantity) VALUES($1, $2, $3) RETURNING *';
            conn = await client.connect();
            const result = await conn.query(sql, [productToAdd.cart_id, productToAdd.product_id, productToAdd.product_quantity]);
            return result.rows[0];
        } catch (error) {
            throw new Error(`${error}`);
        } finally {
            if (conn !== undefined) {
                conn.release()
            }
        }
    }

    async updateProductQuantity(id: string, quantity: number): Promise<{id: string | number, cart_id: string, product_id: string, product_quantity: number}> {
        let conn;
        try {
            const sql = 'UPDATE cart_products SET product_quantity=($1) WHERE id=($2) RETURNING *';
            conn = await client.connect();
            const result = await client.query(sql, [quantity, id]);
            return result.rows[0];
        } catch (error) {
            throw new Error(`${error}`);
        } finally {
            if (conn !== undefined) {
                conn.release();
            }
            
        }
    }

    async removeItemFromCart(id: string): Promise<{id: string | number, cart_id: string, product_id: string, product_quantity: number}> {
        let conn;
        try {
            const sql = 'DELETE FROM cart_products WHERE id=($1) RETURNING *';
            conn = await client.connect();
            const result = await client.query(sql, [id]);
            return result.rows[0];
        } catch (error) {
            throw new Error(`${error}`);
        } finally {
            if (conn !== undefined) {
                conn.release();
            }
        }
    }
}