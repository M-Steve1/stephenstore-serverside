import supertest from 'supertest';
import app from '../../server';
import { UserService } from '../../services/userService';

const userService = new UserService();
const request = supertest(app);

describe('Product route', () => {
  it('Expects index endpoint to return 200 statusCode', async () => {
    const response = await request.get('/product/index');
    expect(response.statusCode).toBe(200);
  });
  it('Expects show endpoint to return 200 statusCode', async () => {
    const response = await request.get('/product/show/1');
    expect(response.statusCode).toBe(200);
  });
  it('Expects create endpoint to return 201 statusCode', async () => {
    const token = userService.createToken({ userId: '1' });
    request
      .post('/product/create')
      .set('Authorization', 'bearer ' + token)
      .send({
        name: 'Jeans',
        price: 7000,
        category: 'clothing'
      })
      .expect(201);
  });
});
