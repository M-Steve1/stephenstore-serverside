import client  from '../database';

export type Product = {
  id?: number,
  name: string,
  price: number,
  category: string,
  url: string,
  description: string
};

export class ProductStore {
  async index(): Promise<Product[] | null> {
    try {
      const { data, error, status} = await client
      .from("products")
      .select()

      if (data !== null) return data as Product[];
      else return null;
    } catch (error) {
      throw new Error(`Cannot fetch products:${error}`);
    }
  }

  async show(id: number): Promise<Product | null> {
    try {
      const { data, error, status} = await client
      .from("products")
      .select()
      .eq("id", id)

      if (data !== null) return data[0] as Product;
      else return null;
    } catch (error) {
      throw new Error(`Cannot fetch the product:${error}`);
    }
  }

  async create(p: Product): Promise<Product | null> {
    try {
      const { data, error, status} = await client
      .from("products")
      .insert({name: p.name.toLowerCase(), price: p.price, category: p.category.toLowerCase(), url: p.url, description: p.description})
      .select();

      if (data !== null) return data[0] as Product;
      else return null;
    } catch (error) {
      throw new Error(`Cannot Create the product: ${error}`);
    }
  }
}

