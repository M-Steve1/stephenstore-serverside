import { Request, Response } from 'express';
import { Product, ProductStore } from '../models/product';
// import { data } from '../data'

const productStore = new ProductStore();

export const index = async (req: Request, res: Response): Promise<void> => {
  try {
    const products = await productStore.index();
    res.status(200).json(products);
  } catch (error) {
    throw new Error(`${error}`);
  }
};

export const getProductById = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const id = req.params.id;
    const theProduct = await productStore.show(parseInt(id));
    res.status(200).json(theProduct);
  } catch (error) {
    res.status(400).json(`cannot get the product: ${error}`);
  }
};

export const create = async (req: Request, res: Response): Promise<void> => {
  try {
    const { name, price, category, url, description } = req.body;
    const product: Product = {
      name: name,
      price: parseFloat(price),
      category: category,
      url: url,
      description: description
    };
    const createdProduct = await productStore.create(product);
    res.status(201).json(createdProduct);
  } catch (error) {
    throw new Error(`${error}`);
  }
};

/*
  use this code to populate your DB with products
*/

/*
  data.forEach((d) => {
  const product: Product = {
    name: d.name,
    price: d.price,
    category: d.category,
    url: d.url,
    description: d.description
  }

  productStore.create(product);
})
*/