import supertest from 'supertest';
import app from '../../server';

const request = supertest(app);

describe('Product service route', () => {
  it('/product/category/:category endpoint should return status code of 200', async () => {
    const response = await request.get('/product/category/games');
    expect(response.statusCode).toBe(200);
  });
  it('/product/category/:category endpoint should return status code of 400', async () => {
    const response = await request.get('/product/category/doesnotexist');
    expect(response.statusCode).toBe(400);
  });
  it('/product/show-product/:name endpoint should return status code of 200', async () => {
    const response = await request.get('/product/show-product/ps5');
    expect(response.statusCode).toBe(200);
  });
  it('/product/show-product/:name endpoint should return status code of 400', async () => {
    const response = await request.get('/product/show-product/doesnotexist');
    expect(response.statusCode).toBe(400);
  });

  it('/product/all-categories endpoint should return status code of 200', async () => {
    const response = await request.get('/product/all-categories');
    expect(response.statusCode).toBe(200);
  });
});
