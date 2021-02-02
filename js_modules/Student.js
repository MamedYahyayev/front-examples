export class Student {
  constructor(name, surname) {
    this.name = name;
    this.surname = surname;
  }

  showInfo() {
    console.log("Name: ", this.name);
    console.log("Surname: ", this.surname);
    console.log(globalThis.AUTHOR)
  }
}
