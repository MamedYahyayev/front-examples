// Value - this is the value of property
// Writtable means we can set the value that property or doesn't
// Configurable means we can delete the object's property or doesn't 
// Enumerable means we can iterate this object or doesn't

const person = {
  name: "Samir",
  greet() {
    console.log(this.name + " bled");
  },
  surname: "Samirov",
};

Object.defineProperty(person, "name", {
  enumerable: true,
  value: person.name,
  writable: false,
  configurable: true,
});

Object.defineProperty(person, "surname", {
  enumerable: true,
  value: person.surname,
  writable: false,
  configurable: false,
});

Object.defineProperty(person, "greet", {
  enumerable: false,
  value: person.surname,
  writable: true,
  configurable: true,
});

person.name = "Alex";
person.surname = "Alexov";

delete person.surname;
delete person.name;

for (const p in person) {
  console.log(p);
}

console.log(person);
