import { ProductStore } from '../../models/product';

const productStore = new ProductStore();

describe('Product model', () => {
  it('Should have an index method', () => {
    expect(productStore.index).toBeDefined();
  });
  it('Should have a show method', () => {
    expect(productStore.show).toBeDefined();
  });
  it('Should have a create method', () => {
    expect(productStore.create).toBeDefined();
  });

  it('Should return all the products', async () => {
    const result = await productStore.index();
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
  it('Should return the specified(id) product', async () => {
    const result = await productStore.show(1);
    expect(result).toEqual({
      id: 1,
      name: 'ps5',
      price: 25.6,
      category: 'games',
      url: 'http://games.com',
      description: 'Can take your whole day'
    });
  });
  beforeAll(async () => {
    const result = await productStore.create({
      name: 'ps5',
      price: 25.6,
      category: 'games',
      url: 'http://games.com',
      description: 'Can take your whole day'
    });
    expect(result).toEqual({
      id: 1,
      name: 'ps5',
      price: 25.6,
      category: 'games',
      url: 'http://games.com',
      description: 'Can take your whole day'
    });
  });
});
