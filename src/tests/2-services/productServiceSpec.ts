import { ProductService } from '../../services/productService';

const productService = new ProductService();

describe('Produce service', () => {
  it('Should return products under the specified category', async () => {
    const result = await productService.productsByCategory('games');
    expect(result).toEqual([
      {
        id: 1,
        name: 'ps5',
        price: 25.6,
        category: 'games',
        url: 'http://games.com',
        description: 'Can take your whole day'
      }
    ]);
  });

  it('Should return empty array because category does not exist', async () => {
    const result = await productService.productsByCategory('makeup');
    expect(result).toEqual([]);
  });

  it('Should get products by name', async () => {
    const result = await productService.getProductByName('ps5');
    expect(result).toEqual([
      {
        id: 1,
        name: 'ps5',
        price: 25.6,
        category: 'games',
        url: 'http://games.com',
        description: 'Can take your whole day'
      }
    ]);
  });

  it('Should return products that have this string in their name', async () => {
    const result = await productService.getProductByName('5');
    expect(result).toEqual([
      {
        id: 1,
        name: 'ps5',
        price: 25.6,
        category: 'games',
        url: 'http://games.com',
        description: 'Can take your whole day'
      }
    ]);
  });

  it('Expect to be an empty string because no products have this string their name', async () => {
    const result = await productService.getProductByName('xyz');
    expect(result).toEqual([]);
  });

  it('Should return all products categories', async () => {
    const result = await productService.allProductCategories();
    expect(result).toEqual([
      {
        category: 'games'
      }
    ]);
  });
});
