import { CartServiceStore } from "../../services/cartService";
import { CartStore } from "../../models/cart"

const cartStore = new CartStore();
const cartServiceStore = new CartServiceStore();

describe("Cart Service", () => {

    beforeAll(async () => {
        const result = await cartStore.create({
            user_id: 1,
            status: "active"
        })

        expect(result).toEqual({
            id: 2,
            user_id: 1,
            status: "active"
        })
    })

    it('getCartByUserId method should be defined', () => {
        expect(cartServiceStore.getCartByUserId).toBeDefined();
    })
    it('isProductInCart method should be defined', () => {
        expect(cartServiceStore.isProductInCart).toBeDefined();
    })
    it('getProductsInCart method should be defined', () => {
        expect(cartServiceStore.getProductsInCart).toBeDefined();
    })
    it('countProductsInCart method should be defined', () => {
        expect(cartServiceStore.countProductsInCart).toBeDefined();
    })


    it("Should return user's active cart", async () => {
        const result = await cartServiceStore.getCartByUserId(1);
        expect(result).not.toEqual({
            id: 1,
            user_id: 1,
            status: "completed"
        })

        expect(result).toEqual({
            id: 2,
            user_id: 1,
            status: "active"
        })
    })

    it("Should return product if in cart", async () => {
        const isProductInCart = await cartServiceStore.isProductInCart(2, 1);

        expect(isProductInCart).not.toEqual({
            id:2,
            cart_id: 2,
            product_id: 1,
            product_quantity: 2
        })

        await cartStore.addProductsToCart({
            cart_id: 2,
            product_id: 1,
            product_quantity: 2
        })

        const isInCart = await cartServiceStore.isProductInCart(2, 1);

        expect(isInCart).toEqual({
            id:2,
            cart_id: 2,
            product_id: 1,
            product_quantity: 2
        })
    })

    afterAll(async () => {
        const result = await cartServiceStore.getProductsInCart(2);
        expect(result).toEqual([{
            id: 2,
            cart_id: 2,
            product_id: 1,
            product_quantity: 2
        }])

        const count = await cartServiceStore.countProductsInCart(2);
        expect(count).toEqual({ count: 1 });

        const countTwo = await cartServiceStore.countProductsInCart(1);
        expect(countTwo).toEqual({ count: 0 })
    })
})