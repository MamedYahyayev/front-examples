// First
const startLine = "     ||<- Start line";
let turtle = "turtle";
let rabbit = "rabbit";

turtle = turtle.padStart(8);
rabbit = rabbit.padStart(8);

console.log(startLine);
console.log(turtle);
console.log(rabbit);

// Second
turtle = turtle.trim().padEnd(9, "=");
console.log(turtle);

// Third
let obj = {
  my: "name",
  is: "Rudolf",
  the: "raindeer",
};

Object.entries(obj).map(value => value.join(" ")).join(' ')

//'my name is Rudolf the raindeer'