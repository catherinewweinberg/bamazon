DROP DATABASE IF EXISTS bamazon_db;
CREATE DATABASE bamazon_db;
USE bamazon_db;

select stock_quantity from products where item_id = 1;

CREATE TABLE products (
item_id INTEGER(10) AUTO_INCREMENT NOT NULL,
product_name VARCHAR(100) NOT NULL,
department_name VARCHAR(100) NOT NULL,
price DECIMAL(10,2) NOT NULL,
stock_quantity INTEGER(50) NOT NULL,
PRIMARY KEY (item_id)
);


Select * from products;

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Calpack Suitcase", "Travel", 175.00, 5),
("Apple iWatch", "Electronics", 450.99, 3),
("Apple iPhone 7", "Electronics", 750.73, 3),
("The North Face Bookbag", "Travel", 85.99, 4),
("Nalgene Water Bottle", "Travel", 10.99, 20),
("Ray-Ban Sunglasses", "Accessories", 189.50, 5),
("Apple Magic Mouse", "Electronics", 99.99, 10),
("Patagonia Black Hole Duffel", "Travel", 299.99, 3),
("Apple Watch Band", "Accessories", 17.99, 20),
("Air Force Academy Hat", "Accessories", 25.00, 100);





