class Product {
  productName;
  productBrand;
  price;
}

const product = new Product();
product.productName = "Iphone";
product.productBrand = "Apple";
product.price = 1200;
console.log(product);

// Constructor
class Product1 {
  productName;
  productBrand;
  price;

  constructor(name, brand, price) {
    this.price = price;
    this.productBrand = brand;
    this.productName = name;
  }
}

const product1 = new Product1("Samsung S20", "Samsung", 1200);
console.log(product1);

// Class methods and static methods
class Student {
  name;
  surname;
  age;

  constructor(name, surname, age) {
    this.name = name;
    this.age = age;
    this.surname = surname;
  }

  welcomeStudent() {
    console.log(
      "Welcome " + this.name + " " + this.surname + ", Your age is " + this.age
    );
  }

  static greeting(name){
    console.log(`Welcome ${name}`)
  }
}

const student = new Student("Samir", "Samirov", 19);
student.welcomeStudent();

Student.greeting("Camil");

console.log("***");


// Private variables and setter getter
class Teacher {
    #name;
    #surname;
    #age;

    set name(value){
        this.#name = value;
    }

    get name(){
        return this.#name;
    }

    set surname(surname){
        this.#surname = surname;
    }

    get surname(){
        return this.#surname;
    }

    set age(age){
        this.#age = age;
    }

    get age(){
        return this.#age;
    }

    toString(){
        return `Teacher { Name: ${this.#name} , Surname: ${this.#surname} , Age: ${this.#age} }`;
    }

}

const teacher = new Teacher();
teacher.name = "Samir";
teacher.surname = "Samirov";
teacher.age = 28;
console.log(teacher.toString());