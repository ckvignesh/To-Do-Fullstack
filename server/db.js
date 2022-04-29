const Pool = require("pg").Pool;

const pool = new Pool({
  user: "postgres",
  password: "Labouche1!",
  host: "localhost",
  port: 5432,
  database: "todofullstack",
});

module.exports = pool;
