import { CartStore } from "../../models/cart"

const cartStore = new CartStore();

describe("Cart Model", () => {

    beforeAll(async () => {
        const result = await cartStore.create({
            user_id: 1,
            status: "active"
        })

        expect(result).toEqual({
            id: 1,
            user_id: 1,
            status: "active"
        })
    })

    it('create method should be defined', () => {
        expect(cartStore.create).toBeDefined();
    })
    it('updateCartStatus method should be defined', () => {
        expect(cartStore.updateCartStatus).toBeDefined();
    })
    it('addProductToCart method should be defined', () => {
        expect(cartStore.addProductsToCart).toBeDefined();
    })
    it('updateProductQuantity method should be defined', () => {
        expect(cartStore.updateProductQuantity).toBeDefined();
    })
    it('removeItemFromCart method should be defined', () => {
        expect(cartStore.removeItemFromCart).toBeDefined();
    })


    it('Should add product to cart', async () => {
        const result = await cartStore.addProductsToCart({
            cart_id: 1,
            product_id: 1,
            product_quantity: 2
        })

        expect(result).toEqual({
            id:1,
            cart_id: 1,
            product_id: 1,
            product_quantity: 2
        })
    })

    afterAll(async () => {
        const resultOne = await cartStore.updateCartStatus({
            id: 1,
            user_id: 1,
            status: "completed"
        })
    
        expect(resultOne).toEqual({
            id: 1,
            user_id: 1,
            status: "completed"
        })
    
        const resultTwo = await cartStore.updateProductQuantity(1, 5)
    
        expect(resultTwo).toEqual({
            id:1,
            cart_id: 1,
            product_id: 1,
            product_quantity: 5
        })
    
        const removedItem = await cartStore.removeItemFromCart(1);
    
        expect(removedItem).toEqual({
            id:1,
            cart_id: 1,
            product_id: 1,
            product_quantity: 5
        })
      })
})