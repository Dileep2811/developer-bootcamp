class StudentManager {
  constructor() {
    this.students = [];
  }

  /**
   * Helper function to calculate the total marks of a student.
   * Uses Array.prototype.reduce for a cleaner, functional approach.
   * @param {number[]} marks 
   * @returns {number}
   */
  calculateTotal(marks) {
    if (!Array.isArray(marks)) return 0;
    return marks.reduce((sum, mark) => sum + (Number(mark) || 0), 0);
  }

  /**
   * Adds a new student to the records.
   * Includes validation for input values.
   * @param {string} name 
   * @param {number[]} marks 
   */
  addStudent(name, marks) {
    if (!name || typeof name !== 'string') {
      console.error("Invalid student name.");
      return;
    }
    if (!Array.isArray(marks)) {
      console.error("Marks must be an array of numbers.");
      return;
    }
    this.students.push({ name: name.trim(), marks });
  }

  /**
   * Displays all students with their total marks in the console.
   */
  displayStudents() {
    if (this.students.length === 0) {
      console.log("No student records found.");
      return;
    }
    console.log("--- Student List ---");
    this.students.forEach(s => {
      console.log(`${s.name} - Total Marks: ${this.calculateTotal(s.marks)}`);
    });
  }

  /**
   * Updates a student's marks.
   * @param {string} name 
   * @param {number[]} newMarks 
   */
  updateStudent(name, newMarks) {
    const student = this.students.find(s => s.name.toLowerCase() === name.trim().toLowerCase());
    if (student) {
      student.marks = newMarks;
    } else {
      console.warn(`Student "${name}" not found.`);
    }
  }

  /**
   * Deletes a student from the records.
   * @param {string} name 
   */
  deleteStudent(name) {
    this.students = this.students.filter(s => s.name.toLowerCase() !== name.trim().toLowerCase());
  }
}

// Test/Execution
const manager = new StudentManager();
manager.addStudent("Dileep", [85, 90, 78]);
manager.addStudent("Anu", [92, 88, 95]);
manager.displayStudents();