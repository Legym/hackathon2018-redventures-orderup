## To run app first start DB in seperaate terminal and then the node service 

## DB for Order Up
- cd data
- edit ./data/docker-compose.xml and put in a password ( don't commit this update into source code )
- Start datbase by running [% docker-compose up] from root dir
- Open new terminal and execute default db models and test data [% docker exec database.dev bash /tmp/import.sh] 
- To update models update files found in data/dbcreate/ddl-tables.sql | dml-tables.sql then execute test data 
- To test connection on your mac laptop do the following: mysql -uroot -p -P13306 -h<your local ip>
- when you are done testing you can destory db container using data/docker-compose rm

## Order Up Node API
- cd app/src 
- update ./config with your db host <you local ip>
- update ./config with your db password 
- npm install
- npm run start
- fetch https://localhost:5000/api/vi/orders, will return test data from node endpoint


## Frontend 
- cd frontend
- npm install
- npm run dev

# Authors:
Andrew Lake
Colin Albert
Gerald Gordon
Marcio Smith
Brandon Cox
Mygel Bergstresser