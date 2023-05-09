--  Inserting values to department ddb
INSERT INTO department (name)
VALUES
('Sales'),
('Engineering'),
('Finance'),
('Legal'),
('Human Resources');

INSERT INTO roles (title, salary, department_id)
VALUES
('Salesperson', 80000, 1),
('Sales Lead', 100000, 1),
('Engineer', 120000, 2),
('Lead Engineer', 150000, 2),
('Accountant', 125000, 3),
('Chief Financial Officer', 300000, 3),
('Lawyer', 190000, 4),
('Legal Team Lead', 250000, 4),
('Human Resources Employee', 80000, 5),
('Human Resources Director', 100000, 5);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES
('Jon', 'Don', 1, 2),
('Mikey', 'Chan', 2, null),
('Ashley', 'R', 3, 4),
('Kevin', 'T', 4, null),
('Mal', 'Brown', 5, 6),
('Sara', 'Lourd', 6, null),
('Tom', 'All', 7, 8),
('Jackie', 'Mey', 8, null),
('Tyson', "S", 9, 10),
('Rebecca', 'Flounder', 10, null);