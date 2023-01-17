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
    expect(result).toEqual([{
      id: 1,
      name: 'ps5',
      price: 400000,
      category: 'games'
    }]);
  });
  it('Should return the specified(id) product', async () => {
    const result = await productStore.show('1');
    expect(result).toEqual({
      id: 1,
      name: 'ps5',
      price: 400000,
      category: 'games'
    });
  });
  beforeAll(async () => {
    const result = await productStore.create({
      name: 'ps5',
      price: 400000,
      category: 'games'
    });
    expect(result).toEqual({
      id: 1,
      name: 'ps5',
      price: 400000,
      category: 'games'
    });
  });
});
