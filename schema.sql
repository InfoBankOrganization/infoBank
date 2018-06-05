CREATE DATABASE rutgers;
USE rutgers;

CREATE TABLE users
(
	id int NOT NULL AUTO_INCREMENT,
	username varchar(255) NOT NULL,
	password varchar(255) NOT NULL,
	PRIMARY KEY (id)
);

CREATE TABLE question
(
id int NOT NULL AUTO_INCREMENT ,
question VARCHAR  (255) NOT NULL,
answer VARCHAR  (255) NOT NULL,
PRIMARY KEY(id)
)
	
