CREATE TABLE products(
    id SERIAL PRIMARY KEY,
    name text,
    price decimal,
    category VARCHAR(100),
    url text,
    description text
);