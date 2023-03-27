import app from "../../server";
import supertest from "supertest";
import { UserService } from "../../services/userService";

const request = supertest(app);
const userService = new UserService();

describe('Cart Service Route', () => {
    it('Expect /cart/show-cart/:id endpoint to return a statusCode of 200', async () => {
        const token = await userService.createToken({userId: 1});
        await request
        .get('/cart/show-cart/1')
        .set('Authorization', 'bearer ' + token)
        .expect(200);
    })

    it('Expect /cart/products-in-cart/:id endpoint to return a statusCode of 200', async () => {
        const token = await userService.createToken({userId: 1});
        await request
        .get('/cart/products-in-cart/1')
        .set('Authorization', 'bearer ' + token)
        .expect(200);
    })

    it('Expect /cart/show-product-cart endpoint to return a statusCode of 200', async () => {
        const token = await userService.createToken({userId: 1});
        await request
        .post('/cart/show-product-cart')
        .set('Authorization', 'bearer ' + token)
        .send({
            cart_id: 1,
            product_id: 1
        })
        .expect(200);
    })
    
    it('Expect /cart/count-products-in-cart/:id endpoint to return a statusCode of 200', async () => {
        const token = await userService.createToken({userId: 1});
        await request
        .get('/cart/count-products-in-cart/1')
        .set('Authorization', 'bearer ' + token)
        .expect(200);
    })
})