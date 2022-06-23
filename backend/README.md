# backend

In backend, MySQL is used for table user, in this table, created with ORM, sequelize, have the user and the password, the password is crypto by bcryptjs.

When user logged, the app return a token, JWT. With this token, the person can add a location in the db, mongoDB, the connection with express to mongoDB, is mongoose.

The location is format GeoJson.

- Config docker, and docker-compose:
    create a container, MySQL, mongoDB and Node.js.
- Config Sequelize to MySQL:
    create db with one single table to login.
- Create service to table login;
- Create controller to table login;
- Create routes to table login:
    post to login,
    post to register.
- config mongoose to MongoDB:
    create db with documents with location;
- Create Model to MongoDB;
- Create Service to MongoDB;
- Create controler to MongoDB;
- create routes to mongoDB:
    post to new GeoJson,
    get to list GeoJson,
    get/:id to on GeoJson,
    patch/:id to GeoJson,
    delete/:id to GeoJson.

This app is create with TDD, using jest.