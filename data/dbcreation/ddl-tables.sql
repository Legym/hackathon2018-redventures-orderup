DROP DATABASE IF EXISTS OrderUp;

CREATE DATABASE OrderUp;

USE OrderUp;

CREATE TABLE IF NOT EXISTS Entree (
  ID int(11) NOT NULL AUTO_INCREMENT,
  VendorID int(10) unsigned NOT NULL,
  Name varchar(255) DEFAULT NULL,
  Price int(10) unsigned DEFAULT NULL,
  Description varchar(255) DEFAULT NULL,
  Calories int(10) unsigned DEFAULT NULL,
  NumSides int(10) unsigned NOT NULL,
  ImgUrl varchar(255) DEFAULT NULL,
  PRIMARY KEY (ID),
  KEY VendorID (VendorID),
  KEY Name (Name)
);

CREATE TABLE IF NOT EXISTS Vendor (
  ID int(11) NOT NULL AUTO_INCREMENT,
  LocationID int(10) unsigned NOT NULL,
  Name varchar(255) DEFAULT NULL,
  PRIMARY KEY (ID),
  KEY LocationID (LocationID)
);

CREATE TABLE IF NOT EXISTS Location (
  ID int(11) NOT NULL AUTO_INCREMENT,
  Name varchar(255) DEFAULT NULL,
  PRIMARY KEY (ID)
);

CREATE TABLE IF NOT EXISTS `Order` (
  ID int(11) NOT NULL AUTO_INCREMENT,
  OrderID bigint(14) unsigned NOT NULL,
  FirstName varchar(255) DEFAULT NULL,
  LastName varchar(255) DEFAULT NULL,
  Email varchar(255) DEFAULT NULL,
  LocationID varchar(255) NOT NULL,
  TotalCost varchar(50) DEFAULT NULL,
  Completed varchar(1) DEFAULT "N",
  PRIMARY KEY (ID)
);

CREATE TABLE IF NOT EXISTS OrderEntree(
  ID int(11) NOT NULL AUTO_INCREMENT,
  OrderID bigint(14) unsigned NOT NULL,
  EntreeID int(11) NOT NULL,
  PRIMARY KEY (ID)
);

CREATE TABLE IF NOT EXISTS OrderEntreeSide(
  ID int(11) NOT NULL AUTO_INCREMENT,
  OrderEntreeID int(11) NOT NULL,
  SideID int(11) NOT NULL,
  PRIMARY KEY (ID)
);

CREATE TABLE IF NOT EXISTS OrderDrink(
  ID int(11) NOT NULL AUTO_INCREMENT,
  OrderID bigint(14) unsigned NOT NULL,
  DrinkID int(11) NOT NULL,
  PRIMARY KEY (ID)
);

CREATE TABLE IF NOT EXISTS OrderSide(
  ID int(11) NOT NULL AUTO_INCREMENT,
  OrderID bigint(14) unsigned NOT NULL,
  SideID int(11) NOT NULL,
  PRIMARY KEY (ID)
);

CREATE TABLE IF NOT EXISTS Side(
  ID int(11) NOT NULL AUTO_INCREMENT,
  Name varchar(255) NOT NULL,
  Description varchar(500) NOT NULL,
  LocationID varchar(255) NOT NULL,
  VendorID varchar(255) DEFAULT NULL,
  Price int(30) NOT NULL,
  Calories varchar(255) NOT NULL,
  ImgUrl varchar(255) NOT NULL,
  PRIMARY KEY (ID)
);

CREATE TABLE IF NOT EXISTS Drink(
  ID int(11) NOT NULL AUTO_INCREMENT,
  LocationID varchar(255) NOT NULL,
  Price int(30) NOT NULL,
  ImgUrl varchar(255) NOT NULL,
  Name varchar(255) NOT NULL,
  PRIMARY KEY (ID)
);