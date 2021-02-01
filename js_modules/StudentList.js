const studentsSection = document.querySelector(".students");

export class StudentList {
  students = [];

  addStudent(student) {
    this.students.push(student);
  }

  attachStudent() {
    studentsSection.innerHTML = "";
    this.students.forEach((student) => {
      const newStudent = document.createElement("li");
      newStudent.textContent = student.name + "  " + student.surname;
      studentsSection.appendChild(newStudent);
    });
  }
}
