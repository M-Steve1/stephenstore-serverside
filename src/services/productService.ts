import client from '../database';
import { Product } from '../models/product';

export class ProductService {
  async fiveMostPopularProducts(): Promise<object[]> {
    let conn;
    try {
      const sqlOne =
        'SELECT product_id, COUNT(product_id) AS most_popular FROM orders GROUP BY product_id ORDER BY most_popular DESC LIMIT 5';
      const sqlTWo =
        'SELECT product_id, COUNT(product_id) AS most_popular FROM order_products GROUP BY product_id ORDER BY most_popular DESC LIMIT 5';
      conn = await client.connect();
      const resultOne = await conn.query(sqlOne);
      const resultTwo = await conn.query(sqlTWo);
      const _resultOne = resultOne.rows;
      const _resultTwo = resultTwo.rows;
      const length = _resultOne.length;
      // Loop merges/pushes _resultTwo into _resultOne while adding the
      // duplicate.
      for (let i = 0; i < length; i++) {
        for (let j = 0; j < length; j++) {
          if (_resultOne[i].product_id === _resultTwo[j].product_id) {
            _resultOne[i].most_popular =
              parseInt(_resultOne[i].most_popular) +
              parseInt(_resultTwo[j].most_popular);
            break;
          } else {
            // converts to integer
            _resultOne[i].most_popular = parseInt(_resultOne[i].most_popular);
          }
        }
        for (let k = 0; k < length; k++) {
          if (
            _resultTwo[i].product_id !== _resultOne[k].product_id &&
            k === length - 1
          ) {
            // converts to integer before pushing into _resultOne
            _resultTwo[i].most_popular = parseInt(_resultTwo[i].most_popular);
            _resultOne.push(_resultTwo[i]);
          } else if (_resultTwo[i].product_id === _resultOne[k].product_id) {
            break;
          }
        }
      }
      // sorting in DESC order.
      _resultOne.sort((a, b) => {
        return b.most_popular - a.most_popular;
      });
      const fiveMostPopularProducts: object[] = [];
      for (let i = 0; i < length; i++) {
        const sql = 'SELECT name FROM products WHERE id=($1)';
        const result = await conn.query(sql, [_resultOne[i].product_id]);
        fiveMostPopularProducts.push(result.rows[0]);
      }
      return fiveMostPopularProducts;
    } catch (error) {
      throw new Error(`Something went wrong ${error}`);
    } finally {
      if (conn !== undefined) {
          conn.release();
      }
  }
  }

  async productsByCategory(category: string): Promise<Product[]> {
    let conn;
    try {
      const sql = 'SELECT * FROM products WHERE category=($1)';
      conn = await client.connect();
      const result = await conn.query(sql, [category.toLowerCase()]);
      return result.rows;
    } catch (error) {
      throw new Error(`${error}`);
    } finally {
      if (conn !== undefined) {
          conn.release();
      }
  }
  }

  async getProductByName(productName: string): Promise<Product[]> {
    let conn;
    try {
      const sql = `SELECT * FROM products WHERE name LIKE ($1)`;
      conn = await client.connect();
      const result = await conn.query(sql, [`%${productName.toLowerCase()}%`]);
      return result.rows;
    } catch (error) {
      throw new Error(`Cannot fetch the product:${error}`);
    } finally {
      if (conn !== undefined) {
          conn.release();
      }
  }
  }

  async allProductCategories(): Promise<{ category: string }[]> {
    let conn;
    try {
      const sql = 'SELECT DISTINCT category FROM products';
      conn = await client.connect();
      const result = await conn.query(sql);
      return result.rows;
    } catch (error) {
      throw new Error(`${error}`);
    } finally {
      if (conn !== undefined) {
          conn.release();
      }
  }
}
}
