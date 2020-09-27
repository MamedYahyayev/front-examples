// Filter Unique Values with Set Object Types

const array = [1, 4, 6, 2, 6, 9, 2, 4, 3];

const uniqueArray = [...new Set(array)];

console.log(array); // [1, 4, 6, 2, 6, 9, 2, 4, 3]
console.log(uniqueArray); // [1, 4, 6, 2, 9, 3]

// Every and Some  : theese 2 functions returns boolean values


// Every 
const negative_random_numbers = [1, 3, 5, 6, -8, 3, -2];
const positive_random_numbers = [1, 4, 5, 6, 7, 8];

const isPositive = (number) => {
  return number > 0;
};

let result = negative_random_numbers.every(isPositive);
console.log(result); // false 
// Because negative random numbers each number must be a positive

result = positive_random_numbers.every(isPositive);
console.log(result); // true
// because positive random numbers array's numbers are positive numbers


// Some
let resultSome = negative_random_numbers.some(isPositive);
console.log(result); // true 

resultSome = positive_random_numbers.some(isPositive);
console.log(result); // true



// Converting values 

// Convert to Boolean 
const isTrue = !0;
const isFalse = !1;
const alsoFalse = !!0;

console.log(isTrue) // true
console.log(typeof isTrue) // boolean

console.log(isFalse) // false
console.log(typeof isFalse) // boolean

console.log(alsoFalse) // false
console.log(typeof alsoFalse)  // boolean


// Convert to String 
const value = 1 + "1";

console.log(value) // Result: 11
console.log(typeof value) // string


// Convert to Number
let numberValue = "123";
numberValue = +numberValue;

console.log(numberValue) // 123
console.log(numberValue + 1024) // 1147
console.log(typeof numberValue) // number

// + operator convert strign to number value

console.log("-----------------------------")
// Convert Float to Integer
const floatValue = 23.7;

console.log(floatValue | 0); // 23
console.log(typeof floatValue); // number


// Format JSON Code  with stringify()

console.log(JSON.stringify({name: "Samir" , surname: "Samirov"}, null , "\t"))