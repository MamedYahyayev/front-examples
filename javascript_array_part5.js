console.log("Part 5 Start");

// Javascript Array method Part 5
// map()
// pop()
// shift()
// unshift()
// push()

// MAP
const map_array = [1, 2, 3, 4, 5, 6];

const new_map_array = map_array.map((number) => {
  return number + 4;
});

console.log(new_map_array);

// ----------------------------------------------------------------------------------

// POP this method removes element from end of the array
console.log(map_array.pop()); // and this method return element which was removed
console.log(map_array); // [1, 2, 3, 4, 5]

// ----------------------------------------------------------------------------------

// SHIFT this method removes element from beginning of the array
console.log(map_array.shift()); // and this method return element which was removed
console.log(map_array); // [2, 3, 4, 5]

// ----------------------------------------------------------------------------------

// PUSH this method add  one or more elements at  the end of an array

// add one element
console.log(map_array.push(2)); // and this method returns updated length of an array and returns 5
console.log(map_array); // [2, 3, 4, 5, 2]

// add more than one element
console.log(map_array.push(12, 33, 45, 22, 32)); // 10 - length of array
console.log(map_array) // [2, 3, 4, 5, 2, 12, 33, 45, 22, 32]


// ----------------------------------------------------------------------------------

// UNSHIFT this method add one or more elements at the begginnig of the array

// add one element
console.log(map_array.unshift(2)); // and this method returns updated length of an array and returns 11 
console.log(map_array); // [2, 2, 3, 4, 5, 2, 12, 33, 45, 22, 32]

// add more than one element
console.log(map_array.unshift(12, 33, 45, 22, 32)); // 16 - length of array
console.log(map_array) // [12, 33, 45, 22, 32, 2, 2, 3, 4, 5, 2, 12, 33, 45, 22, 32]

console.log("Part 5 end");
console.log("----------------------------------------------------");
