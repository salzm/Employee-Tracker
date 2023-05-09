const db = require("../db/connect.js");

// Prompt for user for employees and their roles
const employeePrompt = [
  {
    type: "input",
    name: "first",
    message: "What is the employee's first name?",
  },
  {
    type: "input",
    name: "last",
    message: "What is the employee's last name?",
  },
  {
    // Choosing the employee's role
    type: "list",
    name: "role",
    message: "What is the employee's role?",
    choices: [
      "Salesperson",
      "Sales Lead",
      "Engineer",
      "Lead Engineer",
      "Accountant",
      "Chief Financial Officer",
      "Lawyer",
      "Legal Team Lead",
      "Human Resources Employee",
      "Human Resources Director",
    ],
  },
  {
    type: "confirm",
    name: "confirmManager",
    message: "Does this employee have a manager?",
    default: true,
  },
  // Asking user who is the employee's manager?
  {
    type: "list",
    name: "manager",
    message: "Who is the employee's manager?",
    choices: [
      "Jon Don",
      "Mikey Chan",
      "Ashley R",
      "Kevin T",
      "Mal Brown",
      "Sara L",
      "Tom All",
      "Jackie Mey",
      "Tyson S",
      "Rebecca Flounder",
    ],
    when: ({ confirmManager }) => {
      if (confirmManager) {
        return true;
      } else {
        return false;
      }
    },
  },
];

const employeeUpdateReturn = ({
  newRole,
  employee,
  confirmUpdateManager,
  newManager,
}) => {
  const employeeId = getId(employee);

  let managerId;
  if (confirmUpdateManager === true) {
    managerId = getId(newManager);
  }

  const sql = `UPDATE employees SET role_id = (SELECT id FROM roles WHERE title = ?), manager_id = ? WHERE id = ?`;
  const params = [newRole, managerId, employeeId];
  db.query(sql, params, (req, res) => {});
};
// Assigning employee ID
const getId = (employees) => {
  let employeeId;

  if (employees === "Jon Don") {
    employeeId = 1;
  }
  if (employees === "Mikey Chan") {
    employeeId = 2;
  }
  if (employees === "Ashley R") {
    employeeId = 3;
  }
  if (employees === "Kevin T") {
    employeeId = 4;
  }
  if (employees === "Mal Brown") {
    employeeId = 5;
  }
  if (employees === "Sarah Lourd") {
    employeeId = 6;
  }
  if (employees === "Tom All") {
    employeeId = 7;
  }
  if (employees === "Jackie Mey") {
    employeeId = 8;
  }
  if (employees === "Tyson S") {
    employeeId = 9;
  }
  if (employees === "Rebecca Flounder") {
    employeeId = 10;
  }

  return employeeId;
};

const employeeInsert = ({ first, last, role, manager, confirmManager }) => {
  let managerId;

  if (confirmManager === false) {
    managerId = null;
  } else {
    managerId = getId(manager);
  }
  const sql = `INSERT INTO employees (first_name, last_name, role_id, manager_id) VALUES (?, ?, (SELECT id FROM roles WHERE title = ?), ?)`;
  const params = [first, last, role, managerId];
  db.query(sql, params, (err, res) => {});
};
const employeeUpdatePrompt = [
  {
    type: "list",
    name: "employee",
    message: "Which employee would you like to update?",
    choices: [
      "Jon Don",
      "Mikey Chan",
      "Ashley R",
      "Kevin T",
      "Mal Brown",
      "Sara Lourd",
      "Tom All",
      "Jackie Mey",
      "Tyson S",
      "Rebecca Flounder",
    ],
  },
  {
    type: "list",
    name: "newRole",
    message: "What is their new role?",
    choices: [
      "Salesperson",
      "Sales Lead",
      "Engineer",
      "Lead Engineer",
      "Accountant",
      "Chief Financial Officer",
      "Lawyer",
      "Legal Team Lead",
      "Human Resources Employee",
      "Human Resources Director",
    ],
  },
  {
    type: "confirm",
    name: "confirmUpdateManager",
    message: "Does this employee's manager need to be updated?",
    default: true,
  },
  {
    type: "list",
    name: "newManager",
    message: "Who is the employee's new manager?",
    choices: [
      "Jon Don",
      "Mikey Chan",
      "Ashley Rod",
      "Kevin T",
      "Mal Brown",
      "Sara Lourd",
      "Tom A",
      "Jackie Mey",
      "Tyson S",
      "Rebecca Flounder",
    ],
    when: ({ confirmUpdateManager }) => {
      if (confirmUpdateManager) {
        return true;
      } else {
        return false;
      }
    },
  },
];
//Exports
module.exports = {
  // employeeByManager,
  // employeeByDepartment,
  employeePrompt,
  employeeInsert,
  employeeUpdatePrompt,
  employeeUpdateReturn,
};
