import { Student } from "./Student.js";
import { StudentList } from "./StudentList.js";

// dom elements
const addStudentBtn = document.getElementById("add-student");
const form = document.querySelector("form");

const studentList = new StudentList();

addStudentBtn.addEventListener("click", (event) => {
  event.preventDefault();

  const inputName = form.querySelector("#name");
  const inputSurname = form.querySelector("#surname");

  const student = new Student(inputName.value, inputSurname.value);
  studentList.addStudent(student);
  studentList.attachStudent();
});
