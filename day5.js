let students = [];

function calculateTotal(marks) {
  let total = 0;
  for (let mark of marks) total += mark;
  return total;
}

function addStudent(name, marks) {
  students.push({name, marks});
}

function displayStudents() {
  for (let s of students) {
    console.log(s.name, "Total:", calculateTotal(s.marks));
  }
}

function updateStudent(name, newMarks) {
  for (let s of students) {
    if (s.name === name) s.marks = newMarks;
  }
}

function deleteStudent(name) {
  students = students.filter(s => s.name!== name);
}

// Test
addStudent("Dileep", [85, 90, 78]);
addStudent("Anu", [92, 88, 95]);
displayStudents();