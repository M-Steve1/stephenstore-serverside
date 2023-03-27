import app from '../../server';
import supertest from 'supertest';
import { UserService } from '../../services/userService';

const request = supertest(app);
const userService = new UserService();

describe("Cart Route", () => {
    it('Expects /cart/create endpoint to return 201 statusCode', async () => {
        const token = await userService.createToken({userId: 1});
        await request
        .post('/cart/create')
        .set('Authorization', 'bearer ' + token)
        .send({
            status: "active",
            user_id: 1
        })
        .expect(201);
    })

    it('Expects /cart/add-product endpoint to return 200 statusCode', async () => {
        const token = await userService.createToken({userId: 1});
        await request
        .post('/cart/add-product')
        .set('Authorization', 'bearer ' + token)
        .send({
            cart_id: 2,
            product_id: 1,
            product_quantity: 2
        })
        .expect(200);
    })

    it('Expects /cart/update-cart-status/:id endpoint to return 200 statusCode', async () => {
        const token = await userService.createToken({userId: 1});
        await request
        .put(`/cart/update-cart-status/1`)
        .set('Authorization', 'bearer ' + token)
        .send({
            cartStatus: "completed"
        })
        .expect(200);
    })

    it('Expects /cart/update-product-quantity endpoint to return 200 statusCode', async () => {
        const token = await userService.createToken({userId: 1});
        await request
        .put('/cart/update-product-quantity')
        .set('Authorization', 'bearer ' + token)
        .send({
            id: 2,
            product_quantity: 5
        })
        .expect(200);
    })

    it('Expects /cart/delete/:id endpoint to return 200 statusCode', async () => {
        const token = await userService.createToken({userId: 1});
        await request
        .delete('/cart/delete/2')
        .set('Authorization', 'bearer ' + token)
        .expect(200);
    })
})