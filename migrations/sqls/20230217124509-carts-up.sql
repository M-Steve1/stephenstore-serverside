CREATE TABLE carts(
    id SERIAL PRIMARY KEY,
    user_id bigint REFERENCES users(id),
    status VARCHAR(50)
);