import client  from '../database';
import { Product } from '../models/product';

export class ProductService {

  async productsByCategory(category: string): Promise<Product[] | null> {
    try {
      const {data, error, status} = await client
      .from('products')
      .select()
      .eq('category', category.toLowerCase());

      if (data !== null) return data as Product[];
      else return null
    } catch (error) {
      throw new Error(`${error}`);
    }
  }

  async getProductByName(productName: string): Promise<Product[] | null> {
    try {
      const {data, error, status} = await client
      .from("products")
      .select()
      .like("name", `%${productName.toLowerCase()}%`);

      if (data !== null) return data as Product[]
      else return null;
    } catch (error) {
      throw new Error(`Cannot fetch the product:${error}`);
    }
  }

  async allProductCategories(): Promise<{ category: string }[] | null> {
    try {
      const {data, error, status} = await client
      .from('distinct_category')
      .select();

      if (data !== null) return data as {category: string}[];
      else return null;
    } catch (error) {
      throw new Error(`${error}`);
    }
}
}
