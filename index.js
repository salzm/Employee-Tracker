const db = require("./db/connect.js");
const inquirer = require("inquirer");
const {
  departmentSelect,
  departmentPrompt,
  departmentInsert,
  getDepartmentCost,
} = require("./department.js");
const { rolesSelect, rolePrompt, roleInsert } = require("./roles.js");
const {
  employeePrompt,
  employeeInsert,
  employeeUpdatePrompt,
  employeeUpdateReturn,
} = require("./employee.js");

const mainMenu = require("./lib/menu.js");

db.connect((err) => {
  if (err) throw err;
});

mainMenu();
