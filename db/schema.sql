### Schema

CREATE DATABASE info_db;
USE info_db;

create table question (
	
	id int NOT NULL AUTO_INCREMENT,
	question varchar(255) NOT NULL,
	answer varchar(255) NOT NULL,
	PRIMARY KEY (id)

)

CREATE DATABASE rutgers;

USE rutgers;

CREATE TABLE users
(
	id int NOT NULL AUTO_INCREMENT,
	username varchar(255) NOT NULL,
	password varchar(255) NOT NULL,
	PRIMARY KEY (id)
);