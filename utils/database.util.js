const { Sequelize, DataTypes } = require("sequelize");

// ! Establish DB connection - DataBase connection
const db = new Sequelize({
  dialect: "postgres",
  host: "localhost",
  username: "postgres",
  password: "Mary.licrhis123",
  port: 5432,
  database: "exercise1",
  logging: false,
});

module.exports = { db, DataTypes };
