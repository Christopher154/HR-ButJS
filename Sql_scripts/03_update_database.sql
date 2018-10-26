CREATE DATABASE IF NOT EXISTS employees;
USE employees;

CREATE TABLE IF NOT EXISTS Department (
	id int AUTO_INCREMENT PRIMARY KEY NOT NULL,
	department_name varchar(30) NOT NULL,
	head_of_department_id int NULL
);

CREATE TABLE IF NOT EXISTS Employee (
	id int AUTO_INCREMENT PRIMARY KEY,
	department_id int NOT NULL,
	first_name varchar(25) NOT NULL,
	last_name varchar(25) NOT NULL,
	address varchar(100) NOT NULL,
	nin varchar (9) NOT NULL,
	iban varchar (34) NOT NULL,
	starting_salary float (10,2) NOT NULL,
	FOREIGN KEY (department_id) REFERENCES Department(id)
);

INSERT INTO Department (department_name)
VALUES("Digital Services"),("Systems"),("Smart"),("Evolve"),("People Support"),("Applied innovation");