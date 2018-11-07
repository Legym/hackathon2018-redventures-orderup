USE OrderUp;

INSERT INTO Location(`Name`) VALUES('RV3 South Charlotte');
INSERT INTO Location(`Name`) VALUES('RV6 South Charlotte');


INSERT INTO Vendor(LocationID, Name) VALUES(1,'Salad Bar');
INSERT INTO Vendor(LocationID, Name) VALUES(2,'Grill');
INSERT INTO Vendor(LocationID, Name) VALUES(2,'Pizza');

INSERT INTO Entree(VendorID, Name, Price, Description, Calories, NumSides, ImgUrl) VALUES(2,'Philly Cheesesteak', 400, 'Philly Cheesesteak', 600, 2, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2FBZrN8oev_yv0YoZg5cv2npM5oegsKj3Ij3o8EPB-8RpY-M0');
INSERT INTO Entree(VendorID, Name, Price, Description, Calories, NumSides, ImgUrl) VALUES(1,'Side Salad', 200, 'Add and customize your side salad', 300, 1, 'https://x9d6p5t3.stackpathcdn.com/wp-content/uploads/2014/02/Simple-Side-Salad-7.jpg');
INSERT INTO Entree(VendorID, Name, Price, Description, Calories, NumSides, ImgUrl) VALUES(3,'Pizza Slice', 100, 'Add slice and customize', 400, 3, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRM8frRIwsPGF-xYEGu4u6a6VOuLRd0uouBiBm3a4m_78mKiiEH');
INSERT INTO Entree(VendorID, Name, Price, Description, Calories, NumSides, ImgUrl) VALUES(3,'Calzone', 400, 'Add and customize', 600, 2, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSn585lIjH-gsF48jn8dq2Du2vHc1vVbNmf9lmZjgyDmLLE5Dnh');
INSERT INTO Entree(VendorID, Name, Price, Description, Calories, NumSides, ImgUrl) VALUES(2,'Quesadilla', 400, 'Add and customize', 600, 1, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRztYV5CoyE4MlLCZUwsYJdhxQGy5qISXptSlr_F5kHShyV1YQK');
INSERT INTO Entree(VendorID, Name, Price, Description, Calories, NumSides, ImgUrl) VALUES(2,'Burger', 400, 'Add and customize', 600, 1, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQxoXWZEj47Vln9FFkRV_anOoz-fPPcGTGJ0Z-kJo4LggRpo2yuA');

-- INSERT INTO `Order`(OrderID, FirstName, LastName, LocationID, TotalCost) VALUES(1234678919324, 'James', 'Jones', 1, '4.50');
-- INSERT INTO `Order`(OrderID, FirstName, LastName, LocationID, TotalCost) VALUES(1234678919325, 'Marco', 'Polo', 1, '4.00');
-- INSERT INTO `Order`(OrderID, FirstName, LastName, LocationID, TotalCost) VALUES(1234678919326, 'Sonya', 'Gordon', 2, '2.00');
-- INSERT INTO `Order`(OrderID, FirstName, LastName, LocationID, TotalCost) VALUES(1234678919327, 'Keith', 'Solo', 3, '3.50');

-- INSERT INTO OrderEntree(OrderID, EntreeID) VALUES(111, 123);

-- INSERT INTO OrderEntreeSide(OrderEntreeID, SideID) VALUES(1, 1);
-- INSERT INTO OrderEntreeSide(OrderEntreeID, SideID) VALUES(1, 2);

-- INSERT INTO OrderDrink(OrderID, DrinkID) VALUES(123, 1);
-- INSERT INTO OrderDrink(OrderID, DrinkID) VALUES(456, 2);
-- INSERT INTO OrderDrink(OrderID, DrinkID) VALUES(789, 3);

-- INSERT INTO OrderSide(OrderID, SideID) VALUES(123, 1);
-- INSERT INTO OrderSide(OrderID, SideID) VALUES(234, 2);
-- INSERT INTO OrderSide(OrderID, SideID) VALUES(456, 3);
-- INSERT INTO OrderSide(OrderID, SideID) VALUES(678, 4);

INSERT INTO Side(Name, Description, LocationID, VendorID, Price, Calories, ImgUrl) VALUES('Fries','Customize Salad', 2, 2, 200, 500, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvZhx0MNOQDOhqELlpO1EjmPPwWR0zAi9G6xr0IhPdj44MQftdDQ');
INSERT INTO Side(Name, Description, LocationID, VendorID, Price, Calories, ImgUrl) VALUES('Cesar Salad','Crasins, Tree Nuts',  1, 1, 300, 200, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2NpDypHYCHGjtmllOXpJjjfusoPQceH7VcXkExiyrQwDJzYoLlA');
INSERT INTO Side(Name, Description, LocationID, VendorID, Price, Calories, ImgUrl) VALUES('Spinanch Salad','Customize Salad, Spicy Chicken',  1, 1, 400, 700, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTG5_fLi6w6OPxa6Fbf-FLlSqa68Tq3WELCJCXcYvvm6goDiPJ2uA');
INSERT INTO Side(Name, Description, LocationID, VendorID, Price, Calories, ImgUrl) VALUES('Chicken Noodel','Almons, Chicken',  2, 1, 400, 700, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-r7C8Kc2jK2cvmzke3uKu9ZR9wCSkWhMHmed0bqxvDKxJPt8M');
INSERT INTO Side(Name, Description, LocationID, VendorID, Price, Calories, ImgUrl) VALUES('Potatoes Mashed','Rasins, Chicken',  2, 2, 400, 700, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTE6ClIKQt8JB21fa1Ao0mvkTLCKz9bVFzSaAaA7_M_k6hju1L7');
INSERT INTO Side(Name, Description, LocationID, Price, Calories, ImgUrl) VALUES('Chips','Customer Pick Up',  2, 400, 700, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDEnxd2VEcSmDk8tVW2hsboRieRdsTZAifHQmNLuguCeauSVnJew');

INSERT INTO Drink(LocationID, Name, Price, ImgUrl) VALUES(1, 'Gatorade', 100, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYCm8SnzwTE7exCTjV7XC-VpV9gM2Fk2L5pZe3bgByUSMm8cKn');
INSERT INTO Drink(LocationID, Name, Price, ImgUrl) VALUES(1, 'Fountain Drink', 100, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqho-Az_bMmvxRL9NqrAOtHDtQE1ezSI_Z7mIYKb6v7Y6VhOaK');
INSERT INTO Drink(LocationID, Name, Price, ImgUrl) VALUES(1, 'Kombucha', 200, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOJTUwi_7NMtcYQhPaierGlxxwAK6Z2XgGz3s2GLdj6MYrosHY');
INSERT INTO Drink(LocationID, Name, Price, ImgUrl) VALUES(1, 'Water', 100, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTF974TDMp4aTNz_flHmgNWouFFF1_Gz0IzqcVUpgYP1TBqUUB7Fw');
INSERT INTO Drink(LocationID, Name, Price, ImgUrl) VALUES(2, 'Gatorade', 200, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYCm8SnzwTE7exCTjV7XC-VpV9gM2Fk2L5pZe3bgByUSMm8cKn');
INSERT INTO Drink(LocationID, Name, Price, ImgUrl) VALUES(2, 'Fountain Drink', 100, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqho-Az_bMmvxRL9NqrAOtHDtQE1ezSI_Z7mIYKb6v7Y6VhOaK');
INSERT INTO Drink(LocationID, Name, Price, ImgUrl) VALUES(2, 'Kombucha', 200, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOJTUwi_7NMtcYQhPaierGlxxwAK6Z2XgGz3s2GLdj6MYrosHY');
INSERT INTO Drink(LocationID, Name, Price, ImgUrl) VALUES(2, 'Water', 100, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTF974TDMp4aTNz_flHmgNWouFFF1_Gz0IzqcVUpgYP1TBqUUB7Fw');