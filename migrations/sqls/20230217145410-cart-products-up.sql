CREATE TABLE cart_products(
  id SERIAL PRIMARY KEY,
  cart_id bigint REFERENCES carts(id),
  product_id bigint REFERENCES products(id),
  product_quantity integer
);