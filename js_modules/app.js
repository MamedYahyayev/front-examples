// import { Student } from "./Student.js";
import { StudentList } from "./StudentList.js";

// GlobalThis
globalThis.AUTHOR = "Mamed Yahyayev";

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

 /**
  *  globalThis this element very useful when we use modules. and this element using instead of window object, 
  *  For example i want to send function or data to other js files without using import export, i can use globalThis 
  *  element to add functions or data to window object and this element available on the global and other js files can see
  *  their data or functions easily.
  */