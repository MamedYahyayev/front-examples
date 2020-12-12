// Object prototypes
function Person() {
  this.name = "Samir";
  this.surname = "Samirov";
  this.greet = () => {
    console.log(`Hello ${this.name + " " + this.surname}`);
  };
}

function Employee() {
  this.salary = 1200;
}

Employee.prototype = new Person();

const employee = new Employee();
employee.greet();

console.log("-------------------------------------");

// --------------------------------------------
function BaseEntity() {}
BaseEntity.prototype.id = 0;
BaseEntity.prototype.active = false;
BaseEntity.prototype.greet = (name) => {
  console.log(`Hello ${name}`);
};

function Student(name, surname, age) {
  this.name = name;
  this.surname = surname;
  this.age = age;
}

function Teacher(name, surname, age) {
  this.name = name;
  this.surname = surname;
  this.age = age;
}

Student.prototype = new BaseEntity();
Teacher.prototype = new BaseEntity();

const student = new Student("Qasim", "Qasimov", 22);
student.id = 1;
student.active = true;
student.greet(student.name);

const teacher = new Teacher("Jake", "Jacob", 18);
teacher.id = 2;
teacher.greet(teacher.name);

console.log("----------------------------------");

function Animal() {
  this.name;
}

Animal.prototype.greet = (className) => {
  console.log("Hello " + className);
};

function Dog() {
  this.dogType;
}

Dog.prototype = new Animal();

const animal = new Animal();

animal.name = "sama";
console.log(animal.name);
animal.greet("Animal");

const dog = new Dog();

dog.dogType = "doberman";
console.log(dog.dogType);

dog.name = "samadsada";
console.log(dog.name);

// Call greet methods which belongs to Animal class
dog.greet("Dog");

// Ovveride greet method in Dog object
Dog.prototype.greet = (name) => {
  console.log("Salam " + name);
};

dog.greet("Ovverriden Dog");
