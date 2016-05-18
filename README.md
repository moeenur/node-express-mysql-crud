# node-express-mysql-crud
A simple CRUD example for Node.js based on Express, MySQL and Jade template

## Installation
Please clone or download this to your machine then hit :

	npm install


## Configuration
#### 1. Create Database :

	CREATE DATABASE IF NOT EXISTS nodejs DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;
	USE nodejs;

#### 2. Create Table :

	CREATE TABLE IF NOT EXISTS users (
	  id int(10) NOT NULL AUTO_INCREMENT,
	  name varchar(255) DEFAULT NULL,
	  email varchar(100) DEFAULT NULL,
	  phone int(11) DEFAULT NULL,
	  PRIMARY KEY (id)
	) ENGINE=InnoDB DEFAULT CHARSET=utf8;

#### 3. Update the /model/db.js

	host: 'localhost',
	database:'nodejs',
	user: 'type your db username',
	password: 'type your db password'
