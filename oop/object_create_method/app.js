const person = {
  name: "Samir",
  greet: function () {
    console.log(this.name);
  },
};

const employee = Object.create(person);

console.log(employee);
console.log(person);
