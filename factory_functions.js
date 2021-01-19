const employee = {
  firstname: "Samir",
  lastname: "Samirov",
  age: 22,
  salary: 2300,
};

console.log("Employee: ", employee);

/**
 *  Factory Functions
 *
 *  employee object is static object, that means we cannot create object with dynamic values.
 *  For example we have employee object and this object contains 4 property (firstname, lastname, age , salary). But this values are one person informations.
 *  If we want create multiple person we have to create array of object , but i don't want to do that. I just want to create new object when i need. In this case
 *  We can use factory functions (also we can use constructor functions or JS Class).
 *
 */

function createEmployee(firstname, lastname, age, salary) {
  return {
    firstname,
    lastname,
    age,
    salary,
  };
}

const newEmployee = createEmployee("Qasim", "Zakirov", 33, 1900);
console.log("New Employee: ", newEmployee);

const secondEmployee = createEmployee("Cabbar", "Cabbarov", 24, 2200);
console.log("Second Employee: ", secondEmployee);

/**
 *  To create factory function , we can simply create js functions with function keyword, and then in this function we create object and return back.
 *  Furthermore, we can pass values what we want to this function. And assign this values in the object. These factory functions
 *  help to create objects dynamically and prevents us from copying the object over and over again. And also these functions are written with less code lines.
 */
