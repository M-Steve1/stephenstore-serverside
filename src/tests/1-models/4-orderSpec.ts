import { OrderStore } from '../../models/order';

const orderStore = new OrderStore();

describe('Order model', () => {
  it('Should have a create method', () => {
    expect(orderStore.createOrder).toBeDefined();
  });

  it('Should create and return created order', async () => {
    const result = await orderStore.createOrder({
      user_id: 1,
      cart_id: 1,
      status: 'open'
    });

    expect(result).toEqual({
      id: 1,
      user_id: 1,
      cart_id: 1,
      status: 'open'
    });
  });
});
