import client from '../database';

export type Cart = {
  id?: number;
  user_id: number;
  status: string;
};

export type CartProduct = {
  id?: number;
  cart_id: number;
  product_id: number;
  product_quantity: number;
};

export class CartStore {
  async create(cart: Cart): Promise<Cart | null> {
    try {
      const { data, error, status } = await client
        .from('carts')
        .insert({
          user_id: parseInt(cart.user_id as unknown as string),
          status: cart.status.toLowerCase()
        })
        .select();

      if (data !== null) return data[0] as Cart;
      else return null;
    } catch (error) {
      throw new Error(`${error}`);
    }
  }

  async updateCartStatus(cart: Cart): Promise<Cart | null> {
    try {
      const { data, error, status } = await client
        .from('carts')
        .update({ status: cart.status.toLowerCase() })
        .match({ user_id: cart.user_id, status: 'active' })
        .select();

      if (data !== null) return data[0] as Cart;
      else return null;
    } catch (error) {
      throw new Error(`${error}`);
    }
  }

  async addProductsToCart(
    productToAdd: CartProduct
  ): Promise<CartProduct | null> {
    try {
      const { data, error, status } = await client
        .from('cart_products')
        .insert({
          cart_id: parseInt(productToAdd.cart_id as unknown as string),
          product_id: parseInt(productToAdd.product_id as unknown as string),
          product_quantity: productToAdd.product_quantity
        })
        .select();

      if (data !== null) return data[0] as CartProduct;
      else return null;
    } catch (error) {
      throw new Error(`${error}`);
    }
  }

  async updateProductQuantity(
    id: number,
    quantity: number
  ): Promise<CartProduct | null> {
    try {
      const { data, error, status } = await client
        .from('cart_products')
        .update({ product_quantity: quantity })
        .eq('id', id)
        .select();

      if (data !== null) return data[0] as CartProduct;
      else return null;
    } catch (error) {
      throw new Error(`${error}`);
    }
  }

  async removeItemFromCart(id: number): Promise<CartProduct | null> {
    try {
      const { data, error, status } = await client
        .from('cart_products')
        .delete()
        .eq('id', id)
        .select();

      if (data !== null) return data[0] as CartProduct;
      else return null;
    } catch (error) {
      throw new Error(`${error}`);
    }
  }
}
