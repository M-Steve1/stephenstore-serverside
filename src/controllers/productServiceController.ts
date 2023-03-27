import { Request, Response } from 'express';
import { ProductService } from '../services/productService';

const productService = new ProductService();

export const productsByCategory = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const category = req.params.category;
    const products = await productService.productsByCategory(category);
    if (products?.length === 0 || products === null) {
      res.status(400).json('category does not exist');
    } else {
      res.status(200).json(products);
    }
  } catch (error) {
    throw new Error(`${error}`);
  }
};

export const productByName = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const productName = req.params.name;
    const product = await productService.getProductByName(productName);
    if (product === null || product?.length === 0) {
      res.status(400).json('Product does not exist');
    } else {
      res.status(200).json(product);
    }
  } catch (error) {
    throw new Error(`${error}`);
  }
};

export const allProductCategories = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const allCategories = await productService.allProductCategories();
    res.status(200).json(allCategories);
  } catch (error) {
    throw new Error(`${error}`);
  }
};
