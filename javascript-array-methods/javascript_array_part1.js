console.log("Part 1 start")
// Javascript Array methods Part 1:
// concat()
// copyWithin()
// entries()
// every()

// CONCAT

const firstArray = [1, 2, 3, 4];
const secondArray = [5, 6, 7, 8];

const result = firstArray.concat(secondArray);
console.log(result); //  [1, 2, 3, 4, 5, 6, 7, 8]

console.log(result.concat(1, 4, 6, 7, 8, 98)); // [1, 2, 3, 4, 5, 6, 7, 8, 1, 4, 6, 7, 8, 98]

// COPYWITHIN

// Syntax
// arrayName.copyWithin(insertIndex , copyFromIndex , copyToIndex)

let colors = ["Black", "Blue", "Yellow", "Red", "Green"];
const colorsResult = colors.copyWithin(3, 2, 4);
console.log(colorsResult);

// ENTRIES

// SYNTAX
// arrayName.entries();

let names = ["Samir", "Qasim", "Zakir"];

let arrayName = names.entries();
// entries method gives us an iterate array

console.log(arrayName); // Array Iterator {}

for (let i of arrayName) {
  console.log(i);
}

// Result:
// [0, "Samir"]
// [1, "Qasim"]
// [2, "Zakir"]

// EVERY

let numbers = [4, 6, 8, 10, 12];

const HandlePairNumber = (number) => {
  return number % 2 === 0;
};

let isPairNumber = numbers.every(HandlePairNumber);

console.log(isPairNumber); // true

// because all of elements are pair numbers in numbers array

numbers = [4, 6, 8, 10, 12, 13];

isPairNumber = numbers.every(HandlePairNumber);

console.log(isPairNumber); // false

//because 13 is not a pair number in the array
console.log("Part 1 end")
console.log("---------------------------------------------------")