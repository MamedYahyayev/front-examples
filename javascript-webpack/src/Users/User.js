export class User {
  constructor(name, surname, age) {
    this.name = name;
    this.surname = surname;
    this.age = age;
    this.info;
  }

  info() {
    console.log("User: ", this.name + " " + this.surname + " " + this.age);
  }

  // add user to users array
  addUser(users) {
    this.info();
    users.push(this);
  }
}
