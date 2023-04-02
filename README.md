# Storefront Backend

This is an E-commerce API built with TypeScript, NodeJS and Express. This project also contain Unit and integration
testing done with jasmine.

## Intallation

After cloning the repository run the command below

`$ npm install`

## Usage

- Setup your .env file using the .env.example template file.

#### Development

- To connect to the development database.
- Change `ENV = test` to `ENV = dev` in '.env' file

- start script:

```
 "scripts": {
    "start": "nodemon src/server.ts"
 }
```

#### Testing

- To connect to the testing database.
- Change `ENV = dev` to `ENV = test` in '.env' file

- Test scripts:

```
 "scripts": {
  "build": "npx tsc",
  "test": "set ENV=test && npm run build && jasmine"
  },
```

## API Reference

### User

#### Get Users

```http
  GET https://stephenstore-serverside.vercel.app/user/index
```

| Parameter | Type   | Description                           | Return Type |
| :-------- | :----- | :------------------------------------ | :---------- |
| `None`    | `None` | **Token Required**. Returns all Users | `User[]`    |

#### Get User

```http
  GET https://stephenstore-serverside.vercel.app/user/show/:id
```

| Parameter | Type     | Description                           | Return Type      |
| :-------- | :------- | :------------------------------------ | :--------------- |
| `id`      | `string` | **Token Required**. id of user to get | `User` or `null` |

#### Sign Up

```http
  POST https://stephenstore-serverside.vercel.app/user/signup
```

| Parameter                                        | Type     | Description        | Return Type                                                                             |
| :----------------------------------------------- | :------- | :----------------- | :-------------------------------------------------------------------------------------- |
| `{ first_name, last_name, user_name, password }` | `object` | Creates a new User | `{ token: token, userId: createdUser?.id, userName: createdUser?.user_name }` or `null` |

#### Sign In

```http
  POST https://stephenstore-serverside.vercel.app/user/signin
```

| Parameter                 | Type     | Description | Return Type                                                                               |
| :------------------------ | :------- | :---------- | :---------------------------------------------------------------------------------------- |
| `{ user_name, password }` | `object` | Login User  | `{ token: token, userId: signedInUser?.id, userName: signedInUser?.user_name }` or `null` |

### Product

#### Get Products

```http
  GET https://stephenstore-serverside.vercel.app/product/index
```

| Parameter | Type   | Description              | Return Type           |
| :-------- | :----- | :----------------------- | :-------------------- |
| `none`    | `none` | Returns all the products | `Product[]` or `null` |

#### Get Product

```http
  GET https://stephenstore-serverside.vercel.app/product/show/:id
```

| Parameter | Type     | Description                   | Return Type         |
| :-------- | :------- | :---------------------------- | :------------------ |
| `id`      | `string` | Returns the specified product | `Product` or `null` |

#### Create Product

```http
  POST https://stephenstore-serverside.vercel.app/product/create
```

| Parameter                                     | Type     | Description                              | Return Type         |
| :-------------------------------------------- | :------- | :--------------------------------------- | :------------------ |
| `{ name, price, category, url, description }` | `object` | **Token Required** Creates a new product | `Product` or `null` |

#### Get Products By Category

```http
  GET https://stephenstore-serverside.vercel.app/product/category/:category
```

| Parameter  | Type     | Description                                        | Return Type           |
| :--------- | :------- | :------------------------------------------------- | :-------------------- |
| `category` | `string` | Returns all the products of the specified category | `Product[]` or `null` |

#### Get Products By Name

```http
  GET https://stephenstore-serverside.vercel.app/product/show-product/:name
```

| Parameter | Type     | Description                                                                                            | Return Type           |
| :-------- | :------- | :----------------------------------------------------------------------------------------------------- | :-------------------- |
| `name`    | `string` | Returns all the products having the specified name and products having the specified name as substring | `Product[]` or `null` |

#### Get All categories

```http
  GET https://stephenstore-serverside.vercel.app/product/all-categories
```

| Parameter | Type   | Description                    | Return Type                        |
| :-------- | :----- | :----------------------------- | :--------------------------------- |
| `none`    | `none` | Returns all product categories | `{ category: string }[]` or `null` |

### Cart

#### Create Cart

```http
  POST https://stephenstore-serverside.vercel.app/cart/create
```

| Parameter             | Type     | Description         | Return Type      |
| :-------------------- | :------- | :------------------ | :--------------- |
| `{ status, user_id }` | `object` | **Token Required**. | `Cart` or `null` |

#### Add Product To Cart

```http
  POST https://stephenstore-serverside.vercel.app/cart/add-product
```

| Parameter                                   | Type     | Description                                                                                             | Return Type             |
| :------------------------------------------ | :------- | :------------------------------------------------------------------------------------------------------ | :---------------------- |
| `{ cart_id, product_id, product_quantity }` | `object` | **Token Required**. Adds product to cart, updates the product quantity if product already exist in cart | `CartProduct` or `null` |

#### Update Cart Status

```http
  PUT https://stephenstore-serverside.vercel.app/cart/update-cart-status/:id
```

| Parameters           | Type                          | Description                                         | Return Type      |
| :------------------- | :---------------------------- | :-------------------------------------------------- | :--------------- |
| `id, { cartStatus }` | `string, object` respectively | **Token Required**. Pass user_id as query Parameter | `Cart` or `null` |

#### Update Product Quantity

```http
  PUT https://stephenstore-serverside.vercel.app/cart/update-product-quantity
```

| Parameter                  | Type     | Description                                              | Return Type             |
| :------------------------- | :------- | :------------------------------------------------------- | :---------------------- |
| `{ id, product_quantity }` | `object` | **Token Required**. id should be that of `cart_products` | `CartProduct` or `null` |

#### Remove Product From Cart

```http
  DELETE https://stephenstore-serverside.vercel.app/cart/delete/:id
```

| Parameter | Type     | Description                                              | Return Type             |
| :-------- | :------- | :------------------------------------------------------- | :---------------------- |
| `id`      | `string` | **Token Required**. id should be that of `cart_products` | `CartProduct` or `null` |

#### Get Cart

```http
  GET https://stephenstore-serverside.vercel.app/cart/show-cart/:id
```

| Parameter | Type     | Description         | Return Type      |
| :-------- | :------- | :------------------ | :--------------- |
| `id`      | `string` | **Token Required**. | `Cart` or `null` |

#### Get Products In Cart

```http
  GET https://stephenstore-serverside.vercel.app/cart/products-in-cart/:id
```

| Parameter | Type     | Description                                                    | Return Type               |
| :-------- | :------- | :------------------------------------------------------------- | :------------------------ |
| `id`      | `string` | **Token Required**. Returns all products in the specified cart | `CartProduct[]` or `null` |

#### Show Product In Cart

```http
  POST https://stephenstore-serverside.vercel.app/cart/show-product-in-cart/:id
```

| Parameter                 | Type     | Description                                         | Return Type             |
| :------------------------ | :------- | :-------------------------------------------------- | :---------------------- |
| `{ cart_id, product_id }` | `object` | **Token Required**. Checks if product exist in cart | `CartProduct` or `null` |

#### Count Products In Cart

```http
  GET https://stephenstore-serverside.vercel.app/cart/count-products-in-cart/:id
```

| Parameter | Type     | Description                                                              | Return Type                   |
| :-------- | :------- | :----------------------------------------------------------------------- | :---------------------------- |
| `id`      | `string` | **Token Required**. Returns the number of products in the specified cart | `{ count: number }` or `null` |

### Order

#### Create Order

```http
  POST https://stephenstore-serverside.vercel.app/order/create-order/:id
```

| Parameter                  | Type               | Description                                        | Return Type       |
| :------------------------- | :----------------- | :------------------------------------------------- | :---------------- |
| `id`, `{ cartId, status }` | `string`, `object` | **Token Required**. Pass userId as query Parameter | `Order` or `null` |

## Models

#### User

```code
User = {
  id?: number,
  first_name: string,
  last_name: string,
  user_name: string,
  password: string
}
```

#### Product

```code
Product = {
  id?: number,
  name: string,
  price: number,
  category: string,
  url: string,
  description: string
}
```

#### Cart

```code
Cart = {
    id?: number,
    user_id: number,
    status: string
}
```

#### CartProduct

```code
CartProduct = {
    id?: number
    cart_id: number,
    product_id: number,
    product_quantity: number
}
```

#### Order

```code
 Order = {
  id?: number,
  user_id: number,
  cart_id: number,
  status: string
}
```

## Data Shapes

#### users

- id SERIAL PRIMARY KEY
- first_name text
- last_name text
- user_name text
- password text

#### products

- id SERIAL PRIMARY KEY
- name text
- price decimal
- category text
- url text
- description text

#### carts

- id SERIAL PRIMARY KEY
- user_id bigint REFERENCES users(id)
- status text

#### cart_products

- id SERIAL PRIMARY KEY
- cart_id bigint REFERENCES carts(id)
- product_id bigint REFERENCES products(id)
- product_quantity integer

#### orders

- id SERIAL PRIMARY KEY
- user_id bigint REFERENCES users(id)
- cart_id bigint REFERENCES carts(id)
- status text

#### Formatting

```
 "scripts": {
    "prettier": "prettier --config .prettierrc \"src/**/*.ts\" --write",
    "lint": "eslint src/**/*.ts",
 }
```
