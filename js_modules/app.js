// import { Student } from "./Student.js";
import { StudentList } from "./StudentList.js";

// dom elements
const addStudentBtn = document.getElementById("add-student");
const form = document.querySelector("form");

const studentList = new StudentList();

addStudentBtn.addEventListener("click", (event) => {
  event.preventDefault();
  addStudent();
});

function addStudent() {
  import("./Student.js").then((module) => {
    const inputName = form.querySelector("#name");
    const inputSurname = form.querySelector("#surname");

    const student = new module.Student(inputName.value, inputSurname.value);
    studentList.addStudent(student);
    studentList.attachStudent();
  });
}

/**
 *  Dynamic Imports when we click the add button on the html page and then Student.js file will load immediately.
 *  This is very helpful for increase performance.
 */