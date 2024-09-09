// Soal 1: Buat fungsi untuk memfilter karyawan yang memiliki usia >= 30 menggunakan filter()
// Input: Array of objects dengan properti id, name, age, salary
// Output: Array yang hanya berisi karyawan dengan usia >= 30
function filterEmployeesByAge(employees) {
  return employees.filter((i) => i.age >= 30);
}

// Soal 2: Buat fungsi yang akan menambahkan bonus sebesar 10% ke setiap gaji karyawan menggunakan map()
// Input: Array of objects dengan properti salary
// Output: Array dengan gaji yang telah ditambahkan 10%
function applyBonus(employees) {
  return employees.map((i) => ({
    ...employees,
    salary: i.salary * 1.1,
  }));
}

// Soal 3: Buat fungsi yang menggunakan reduce() untuk menghitung total gaji semua karyawan
// Input: Array of objects dengan properti salary
// Output: Total semua gaji
function calculateTotalSalary(employees) {
  return employees.reduce((total, i) => total + i.salary, 0);
}

// Soal 4: Buat fungsi yang menggunakan spread operator untuk menambahkan karyawan baru ke dalam array
// Input: Array of objects dan objek karyawan baru
// Output: Array baru dengan karyawan tambahan dibelakang
function addNewEmployee(employees, newEmployee) {
  return [...employees, newEmployee];
}

// Soal 5: Gunakan destructuring assignment untuk mendapatkan nama dan gaji karyawan pertama
// Input: Array of objects
// Output: Destructuring variabel yang memuat nama dan gaji karyawan pertama
function getFirstEmployeeDetails(employees) {
  const { name: firstName, salary: firstSalary } = employees[0];
  return { firstName, firstSalary };
}

// Soal 6: Buat template literal untuk menampilkan informasi karyawan
// Input: Objek karyawan dengan properti name, age, salary
// Output: String dengan format "Nama: X, Usia: Y, Gaji: Z"
function employeeInfo(employee) {
  return `Nama: ${employee.name}, Usia: ${employee.age}, Gaji: ${employee.salary}`;
}

module.exports = {
  filterEmployeesByAge,
  applyBonus,
  calculateTotalSalary,
  addNewEmployee,
  getFirstEmployeeDetails,
  employeeInfo,
};
