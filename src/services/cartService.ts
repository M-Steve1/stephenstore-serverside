import client from '../database';
import { Cart, CartProduct } from '../models/cart';

export class CartServiceStore {
  async getCartByUserId(user_id: number): Promise<Cart | null> {
    try {
      const { data, error, status } = await client
        .from('carts')
        .select()
        .match({ user_id: user_id, status: 'active' });

      if (data !== null) return data[0] as Cart;
      else return null;
    } catch (error) {
      throw new Error(`${error}`);
    }
  }

  async isProductInCart(
    cart_id: number,
    product_id: number
  ): Promise<CartProduct | null> {
    try {
      const { data, error, status } = await client
        .from('cart_products')
        .select()
        .match({ cart_id: cart_id, product_id: product_id });

      if (data !== null) return data[0] as CartProduct;
      else return null;
    } catch (error) {
      throw new Error(`${error}`);
    }
  }

  async getProductsInCart(cart_id: number): Promise<CartProduct[] | null> {
    try {
      const { data, error, status } = await client
        .from('cart_products')
        .select()
        .eq('cart_id', cart_id);

      if (data !== null) return data as CartProduct[];
      else return null;
    } catch (error) {
      throw new Error(`${error}`);
    }
  }

  async countProductsInCart(
    cart_id: number
  ): Promise<{ count: number } | null> {
    try {
      const { count, error } = await client
        .from('cart_products')
        .select('*', { count: 'exact', head: true })
        .eq('cart_id', cart_id);

      const cartCount = { count: count };

      if (count !== null) return cartCount as { count: number };
      else return null;
    } catch (err) {
      throw new Error(`Something went wrong ${err}`);
    }
  }
}
