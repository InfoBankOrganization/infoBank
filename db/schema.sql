### Schema

CREATE DATABASE info_db;
USE info_db;

create table question (
	
	id int NOT NULL AUTO_INCREMENT,
	question varchar(255) NOT NULL,
	answer varchar(255) NOT NULL,
	PRIMARY KEY (id)

)