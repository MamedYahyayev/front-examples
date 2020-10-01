//  Loops: for , for each , while , for in , for of , while

// FOR
var array = [1, 2, 3, 4, 5, 6, 7];

for (let i = 0; i < array.length; i++) {
  const element = array[i];
  console.log(element);
}

var names = ["Samir", "Samirov", "Qasim"];

for (let i = 0; i < names.length; i++) {
  const name = names[i];
  console.log(name);
}

const persons = [
  {
    id: 1,
    name: "Samir",
    surname: "Qasimov",
  },
  {
    id: 2,
    name: "Qasim",
    surname: "Zakirov",
  },
];

for (let i = 0; i < persons.length; i++) {
  const person = persons[i];
  console.log(person);
}

// FOR EACH
array.forEach((arr) => console.log(arr));
names.forEach((name) => console.log(name));
persons.forEach((person) => console.log(person));

// FOR IN
const student = {
  id: 1,
  name: "samir",
  surname: "samirov",
};

for (const s in student) {
  console.log(student[s]);
}

for (const key in persons) {
  console.log(persons[key]);
}

for (const n in names) {
  console.log(names[n]);
}

// FOR OF
for (const person of persons) {
  console.log(person);
}

for (const name of names) {
  console.log(name);
}

// WHILE
let a = 0;
while (a < 10) {
  console.log(a);
  a++;
}

let flag = true;
let b = 0;
while (flag) {
  if (b === 20) flag = false;
  else {
    console.log(b);
    b++;
  }
}
