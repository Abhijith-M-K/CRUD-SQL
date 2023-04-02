const knex = require("knex");

const db = knex({
  client: "mysql",
  connection: {
    host: process.env.SQL_HOST,
    user: process.env.USER,
    password: process.env.SQL_PASSWORD,
    database: process.env.DB_NAME,
  },
});

module.exports = db;
