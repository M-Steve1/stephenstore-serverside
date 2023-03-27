import supertest from 'supertest';
import app from '../../server';
import { UserService } from '../../services/userService';

const userService = new UserService();
const request = supertest(app);

describe('Order route', () => {
  it('Expects /order/create-order/:id endpoint to return 201 statusCode', async () => {
    const token = await userService.createToken({ userId: 1 });
    request
      .post('/order/create-order/1')
      .set('Authorization', 'bearer ' + token)
      .send({
        cardId: 1,
        status: 'open'
      })
      .expect(201);
  });
});
