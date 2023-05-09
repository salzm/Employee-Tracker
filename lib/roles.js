const db = require("../db/connect.js");

const rolesPrompt = [
  {
    type: "input",
    name: "roleName",
    message: "What is the role name?",
  },
  {
    type: "input",
    name: "salary",
    message: "What is the salary? (Enter a NUMBER)",
  },
  {
    type: "list",
    name: "department",
    message: "In which department is this role?",
    choices: ["Sales", "Engineering", "Finance", "Legal", "Human Resources"],
  },
];

const roleInsert = ({ roleName, salary, department }) => {
  const sql = `INSERT INTO roles (title, salary, department_id) VALUES (?, ?, (SELECT id FROM departments WHERE name = ?))`;
  const params = [roleName, salary, department];
  db.query(sql, params);
};

module.exports = {
  rolePrompt,
  roleInsert,
};
