import client from '../database';

export type Product = {
  id?: string | number,
  name: string,
  price: number,
  category: string,
  url: string,
  description: string
};

export class ProductStore {
  async index(): Promise<Product[]> {
    let conn;
    try {
      const sql = 'SELECT * FROM products';
      conn = await client.connect();
      const result = await conn.query(sql);
      return result.rows;
    } catch (error) {
      throw new Error(`Cannot fetch products:${error}`);
    } finally {
      if (conn !== undefined) {
          conn.release();
      }
  }
  }

  async show(id: string): Promise<Product> {
    let conn;
    try {
      const sql = 'SELECT * FROM products WHERE id=($1)';
      conn = await client.connect();
      const result = await conn.query(sql, [id]);
      return result.rows[0];
    } catch (error) {
      throw new Error(`Cannot fetch the product:${error}`);
    } finally {
      if (conn !== undefined) {
          conn.release();
      }
  }
  }

  async create(p: Product): Promise<Product> {
    let conn;
    try {
      const sql =
        'INSERT INTO products(name, price, category, url, description) VALUES($1, $2, $3, $4, $5) RETURNING *';
      conn = await client.connect();
      // product name and category to lowercase to allow naming consistency
      const result = await conn.query(sql, [
        p.name.toLowerCase(),
        p.price,
        p.category.toLowerCase(),
        p.url,
        p.description
      ]);
      return result.rows[0];
    } catch (error) {
      throw new Error(`Cannot Create the product: ${error}`);
    } finally {
      if (conn !== undefined) {
          conn.release();
      }
  }
  }
}
