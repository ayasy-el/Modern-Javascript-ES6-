const {
  filterEmployeesByAge,
  applyBonus,
  calculateTotalSalary,
  addNewEmployee,
  getFirstEmployeeDetails,
  employeeInfo,
} = require("./employeeFunctions");

const employees = [
  { id: 1, name: "Alice", age: 28, salary: 5000 },
  { id: 2, name: "Bob", age: 35, salary: 7000 },
  { id: 3, name: "Charlie", age: 32, salary: 8000 },
  { id: 4, name: "David", age: 25, salary: 4000 },
  { id: 5, name: "Eve", age: 45, salary: 10000 },
];

describe("Employee Functions", () => {
  // Test Soal 1: Filter by age >= 30
  test("should filter employees with age >= 30", () => {
    const result = filterEmployeesByAge(employees);
    expect(result.length).toBe(3);
    expect(result[0].name).toBe("Bob");
  });

  // Test Soal 2: Apply 10% bonus to salaries
  test("should apply 10% bonus to all employees salaries", () => {
    const result = applyBonus(employees);
    expect(result[0].salary).toBe(5500);
    expect(result[4].salary).toBe(11000);
  });

  // Test Soal 3: Calculate total salary
  test("should calculate the total salary of all employees", () => {
    const totalSalary = calculateTotalSalary(employees);
    expect(totalSalary).toBe(34000);
  });

  // Test Soal 4: Add new employee
  test("should add a new employee to the list", () => {
    const newEmployee = { id: 6, name: "Frank", age: 30, salary: 6000 };
    const updatedEmployees = addNewEmployee(employees, newEmployee);
    expect(updatedEmployees.length).toBe(6);
    expect(updatedEmployees[5].name).toBe("Frank");
  });

  // Test Soal 5: Destructure first employee's name and salary
  test("should destructure first employee details", () => {
    const { firstName, firstSalary } = getFirstEmployeeDetails(employees);
    expect(firstName).toBe("Alice");
    expect(firstSalary).toBe(5000);
  });

  // Test Soal 6: Employee info template literal
  test("should return correct employee info as string", () => {
    const info = employeeInfo(employees[0]);
    expect(info).toBe("Nama: Alice, Usia: 28, Gaji: 5000");
  });
});
