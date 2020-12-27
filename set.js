/*
    Guideline
    1. create Set
    2. add number , array , object to set
    3. delete
    4. size
    5. clear
    6. has
    7. iterate the set
    8. set To Map
    9. unique Array with Set

*/

// create Set
const set = new Set();

// add number to set
set.add(1);
console.log(set);

// add object to set
const person = { name: "Samir", age: 17 };
set.add(person);
console.log(set);

// add array to set
const array = [1, 2, 3, 3, 3, 3, 3, 45, 6, 7, 78, 3454];
set.add(array);
console.log(set);

set.add(1); // this won't add because this added before and the set doesn't allow to add duplicate values
console.log(set);

// delete value in the set
set.delete(person);
console.log("Deleted Set: ", set);

// size
console.log("Size:", set.size);

// has
console.log("Has: ", set.has(1));

// clear
set.clear();
console.log("After the clear: ", set);

// iteration over the Set
const set2 = new Set([1, 3, "Samir", "Qasim"]);
for (let setValue of set2) {
  console.log(setValue);
}

// set keys
for (let setKey of set2.keys()) {
  console.log("Set Keys: ", setKey);
}

// set values
for (let setValue of set2.values()) {
  console.log("Set Values: ", setValue);
}

// set entries
for (let setEntries of set2.entries()) {
  console.log("Set entries: ", setEntries);
}

// set To Map
const map = new Map(set2.entries());
console.log(map);

// unique Array
const nonUnique = [1, 3, 4, 5, 6, 7, 8, 9, 54, 4, 4, 5, 6, 7, 8];
console.log(new Set(nonUnique));
