// SCOPE : Gloabal Scope  and Function Scope

// Global Scope

var name = "Samir";

function sayMyName() {
  console.log("SayMyName Function: " + name);
}

sayMyName();

console.log(name);

// Function Scope

function myAge() {
  var age = 23;
  console.log("MyAge Function: " + age);
}

//console.log(age); // age is not defined because age not accessible outside of myAge function

// Sync Scope Function

var surname;

function sayMySurname() {
  console.log(`My surname is ${surname}`);
}

sayMySurname();

surname = "Samirov";

// Async Scope Function

console.log("-------------------------------------------------------------")

var salary;

function sayMySalary() {
  console.log(`My salary is ${salary}`);
}

setTimeout(() => {
  sayMySalary();
}, 2000);

salary = 4200;

// SetTimeOut function is async function