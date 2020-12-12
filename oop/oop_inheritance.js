class Person {
  id;
  name;
  surname;

  constructor(id, name, surname) {
    this.id = id;
    this.name = name;
    this.surname = surname;
  }
}

class Employee extends Person {
  course;

  constructor(id, name, surname, course) {
    super(id, name, surname);
    this.course = course;
  }

  greet(){
      return `Hello ${this.name}`
  }
}

const employee = new Employee(1, "Samir", "Samirov", 4);
console.log(employee);
console.log(employee.greet());
