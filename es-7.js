// First ------------------------------------------------
const dragons = ["Tim", "Johnathan", "Sandy", "Sarah"];

const result = dragons.includes("John");

if (result) console.log("Yes John is here");
else console.log("No John is not here");


// Second ------------------------------------------------
const resultSecond = dragons.filter(dragon => dragon.includes("John"))
console.log(resultSecond)

// Third ------------------------------------------------
const powerOfhundred = (x) => 100 ** x;
console.log(powerOfhundred(2));

// Fourth ------------------------------------------------
console.log(powerOfhundred(1000))


// Results:
// No John is not here
// [ 'Johnathan' ]
// 10000
// Infinity