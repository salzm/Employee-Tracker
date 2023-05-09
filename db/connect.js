const mysql = require("mysql2");
require("dotenv").config();
// Connect to database

const db = mysql.createConnection({
  host: "127.0.0.1",
  user: "root",
  password: process.env.PW,
  database: "employee_tracker",
});

module.exports = db;
