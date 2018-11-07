#!/usr/bin/env bash
mysql -u root -p$MYSQL_ROOT_PASSWORD < /tmp/dbcreation/ddl-tables.sql
mysql -u root -p$MYSQL_ROOT_PASSWORD < /tmp/dbcreation/dml-data.sql
mysql -u root -p$MYSQL_ROOT_PASSWORD < /tmp/dbcreation/grants.sql 
