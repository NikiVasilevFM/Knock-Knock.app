CREATE DATABASE knock;
USE knock;

CREATE TABLE users (
    id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    user_password VARCHAR(40) NOT NULL,
    user_nickname VARCHAR(30) NOT NULL
);

