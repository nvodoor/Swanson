DROP DATABASE IF EXISTS swanson;

CREATE DATABASE swanson;

USE swanson;

CREATE TABLE items (
  id int NOT NULL AUTO_INCREMENT,
  description varchar(255) NOT NULL,
  PRIMARY KEY (ID),
  UNIQUE KEY (description)
);

/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/
