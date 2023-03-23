import { Request, Response } from "express";
import { Cart, CartStore } from "../models/cart";
import { CartServiceStore } from "../services/cartService";

const cartStore = new CartStore();
const cartService = new CartServiceStore();

export const create = async (req: Request, res: Response): Promise<void> => {
    try {
        const {status, user_id} = req.body;
        const createdCart = await cartStore.create({status, user_id});
        res.status(201).json(createdCart);
    } catch (error) {
        res.status(400).json("Could not create cart");
    }
}

export const updateCartStatus = async (req: Request, res: Response): Promise<void> => {
    try {
        const {cartStatus} = req.body
        const user_id = req.params.id;
        const cart: Cart = {
            user_id: user_id,
            status: cartStatus
        }
        const updatedCart = await cartStore.updateCartStatus(cart);
        res.status(201).json(updatedCart);
    } catch (error) {
        res.status(400).json("Could not update cart");
    }
}

export const addProductsToCart = async (req: Request, res: Response): Promise<void> => {
    try {
        const {cart_id, product_id, product_quantity} = req.body;
        const isProductInCart = await cartService.isProductInCart({cart_id, product_id});
        if (isProductInCart === null || isProductInCart === undefined) {
            const addedProduct = await cartStore.addProductsToCart({cart_id, product_id, product_quantity});
            res.status(201).json(addedProduct);
        } else {
            const updatedProduct = await cartStore.updateProductQuantity(isProductInCart.id as string, parseInt(isProductInCart.product_quantity as unknown as string) + parseInt(product_quantity));
            res.status(200).json(updatedProduct);
        }
       
    } catch (error) {
        res.status(400).json("Could not add Product to cart");
    }
}

export const updateProductQuantity = async (req: Request, res: Response): Promise<void> => {
    try {
        const {id, product_quantity} = req.body;
      
        const updatedProduct = await cartStore.updateProductQuantity(id, product_quantity);  
        res.status(200).json(updatedProduct);
    } catch (error) {
        res.status(400).json("Could not update product quantity");
    }
}

export const removeItemFromCart = async (req: Request, res: Response): Promise<void> => {
    try {
        const id = req.params.id;
        const deletedProduct = await cartStore.removeItemFromCart(id);
        res.status(200).json(deletedProduct);
    } catch (error) {
        res.status(400).json("Could not delete item from cart");
    }
}