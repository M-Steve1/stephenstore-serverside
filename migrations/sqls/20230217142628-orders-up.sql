CREATE TABLE orders(
    id SERIAL PRIMARY KEY,
    user_id bigint REFERENCES users(id),
    cart_id bigint REFERENCES carts(id),
    status VARCHAR(50)
);
