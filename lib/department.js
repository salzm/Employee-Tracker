const db = require("../db/connect.js");

const departmentSelect = `SELECT * FROM department`;

// Prompt for user to ask what is the name of the department.

const departmentPrompt = [
  {
    type: "input",
    name: "deptName",
    message: "What is the department name?",
  },
];

// connecting the database values for users

const departmentInsert = ({ deptName }) => {
  const sql = `INSERT INTO departments (name) VALUES (?)`;
  const params = deptName;
  db.query(sql, params, (err, res) => {});
};

module.exports = {
  departmentSelect,
  departmentPrompt,
  departmentInsert,
};
