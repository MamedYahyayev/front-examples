console.log("Part 2 Start");

// Javascript Array Part 2:
// fill()
// filter()
// find()
// findIndex()

// FILL methods changes original array
// Syntax
// arrayName.fill(fillValue, startIndex, endIndex)

let array = [0, 1, 2, 3, 4, 5];

array.fill(99, 2, 5);

console.log(array);

// FILTER

let filteredNumbers = [1, 2, 34, 5324, 321, 31, 53, 44, 55, 123, 45, 27];

const divideThree = (number) => {
  return number % 3 === 0;
};

const newFilteredNumbers = filteredNumbers.filter(divideThree);

console.log(newFilteredNumbers); // [321, 123, 45, 27]

// FIND
let findNumbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

const number = findNumbers.find(function (num) {
  return num > 4;
});

console.log(number) // Result 5

// this method returns first value which is greater than 4 

// FIND_INDEX

let surnames = ["Samirov" , "Zakirov" , 'Qasimov' , "Abdullayev"]

const surnameIndex = surnames.findIndex(surname => {
    return surname.length > 7
})

console.log("SurnameIndex: " + surnameIndex) // SurnameIndex: 3

console.log("Part 2 end")
console.log("----------------------------------------------------")
