const uid = Symbol("uid");
console.log(uid);

/**
 *  Symbols is unique to prove this we can create 2 new symbols and check these symbols equal each other ot not
 *
 */

console.log(Symbol() === Symbol()); // false

const person = {
  [uid]: 1,
  name: "Samir",
  surname: "Samirov",
};

console.log(person);
person[uid] = 2;
console.log(person);
