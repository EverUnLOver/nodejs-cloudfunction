COMMANDS
^^^^^^^^

* NPM::

        ~:$ npm init -y
        ~:$ npm install -y
        ~:$ npx tsc --init
        ~:$ npm i typescript -D
        ~:$ npm i --save express
        ~:$ npm i @types/express -D
        ~:$ npm i pg
        ~:$ npm i @types/pg -D
        ~:$ npm i nodemon -D
        ~:$ npm i concurrently -D
        ~:$ npm i --save node-fetch
        ~:$ npm i --save @types/node-fetch -D

* SCRIPTS::

        {
            "scripts": {
                "start": "nodemon server.js",
                "build": "tsc --watch",
                "test": "jest",
                "lint": "eslint .",
                "clean": "rimraf dist",
                "precommit": "npm run lint && npm run test",
                "dev": "concurrently \"npm run build\" \"npm run start\""
            }
        }

* POSTGRES::

        ~:$ sudo apt update && sudo apt install postgresql postgresql-contrib
        ~:$ sudo -u usename psql
        usename=# CREATE USER "username" WITH PASSWORD 'password';
        username=# CREATE DATABASE "database" WITH OWNER "username";
        username=# \l;
        username=# \c "database";
        username=# CREATE TABLE "table" (
            id SERIAL PRIMARY KEY,
            name VARCHAR(255) NOT NULL,
            email TEXT,
        );
        username=# \dt;
        username=# \d "table";
        username=# INSERT INTO "table" (name, email)
            VALUES ('Jhon', 'Jhon@gmail.com'),
                   ('Jane', 'Jane@gmail.com');
        usename=# select * from "table";
        ~:$ sudo -u username psql -d "database" -c "ALTER USER username WITH PASSWORD 'password';"