import { Request, Response } from "express";
import { CartServiceStore } from "../services/cartService";

const cartServiceStore = new CartServiceStore();

export const getCartByUserId = async (req: Request, res: Response): Promise<void> => {
    try {
        const user_id = req.params.id;
        const cart = await cartServiceStore.getCartByUserId(parseInt(user_id));
        res.status(200).json(cart);
    } catch (error) {
        res.status(400).json("Something went wrong");
    }
}

export const isProductInCart = async (req: Request, res: Response): Promise<void> => {
    try {
        const {cart_id, product_id} = req.body;
        const result = await cartServiceStore.isProductInCart(parseInt(cart_id), parseInt(product_id));
        res.status(200).json(result);
    } catch (error) {
        res.status(400).json(`${error}`);
    }
}

export const getProductsInCart = async (req: Request, res: Response): Promise<void> => {
    try {
        const cart_id = req.params.id
        const result = await cartServiceStore.getProductsInCart(parseInt(cart_id));
        res.status(200).json(result);
    } catch (error) {
        res.status(400).json(`${error}`);
    }
}

export const countProductsInCart = async (req: Request, res: Response): Promise<void> => {
    try {
        const cart_id = req.params.id
        const result = await cartServiceStore.countProductsInCart(parseInt(cart_id));
        res.status(200).json(result);
    } catch (error) {
        res.status(400).json("Something went wrong");
    }
}