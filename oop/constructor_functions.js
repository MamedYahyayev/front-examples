// Class
class Person {
  name = "Samir";

  constructor() {
    this.age = 29;
  }

  greet() {
    console.log(`I am ${this.name} and i am ${this.age} years old`);
  }
}

const person = new Person();
person.greet(); // I am Samir and i am 29 years old

// Constructor Functions
function Person1() {
  this.name = "Samir";
  this.age = 29;

  this.greet = function () {
    console.log(`I am ${this.name} and i am ${this.age} years old`);
  };
}

const person1 = new Person1();
person1.greet(); // I am Samir and i am 29 years old
