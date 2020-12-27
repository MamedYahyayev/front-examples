// GuideLine
// 1. create Map
// 2. set Map
// 3. get Map
// 4. has Map
// 5. delete value from Map
// 6. map Size
// 7. clear Map
// 8. use Object as keys
// 9. use Array as keys
// 10. chaining map
// 11. iteration over the map
// 12. iteration over the map keys
// 13. iteration over the map values
// 14. iteration over tha both
// 15. Object.entries() Map from Object
// 16. Object.fromEntries() Object from Map

// create Map
const map = new Map();

// set Map
map.set(1, "Samir");
map.set(2, "Qasim");
map.set(3, "Cabbar");

// get Map
console.log(map.get(1));
console.log(map.get(2));

// has Map
if (map.has(1)) {
  console.log("Key exists");
} else {
  console.log("Key doesn't exists");
}

// removes the value with key
map.delete(1);

// map size
console.log("Map size: ", map.size);

// clear
console.log("Before the clear method", map);
map.clear();
console.log("After the clear method", map);

// use object as keys
const map2 = new Map();
const person = { name: "Samir" };
map2.set(person, 1);
console.log(map2);

// use array as keys
map2.set([2.4, 5.6, 7, 13], 2);
console.log(map2);

// chaining map
map2.set(3, "Chemistry").set(4, "Physics");
console.log(map2);

// iteration over the Map
const recipeMap = new Map([
  ["cucumber", 500],
  ["tomatoes", 200],
  ["onions", 300],
]);

// iterate over the keys
for (let recipeKey of recipeMap.keys()) {
  console.log("Keys: ", recipeKey);
}

//iterate over the values
for (let recipeValue of recipeMap.values()) {
  console.log("Values: ", recipeValue);
}

// iterate over the key values
for (let recipeKeyValue of recipeMap) {
  console.log("Key and Values: ", recipeKeyValue);
}

// Object Entries Map from Object , Object.entries() returns array of key/value pairs
const emp = {
  name: "Lale",
  age: 22,
};
const map3 = new Map(Object.entries(emp));
console.log(map3);

// Object.fromEntries , Object from Map
const prices = new Map([
  ["banana", 2],
  ["apple", 3],
  ["orange", 4],
]);
const pricesObject = Object.fromEntries(prices);
console.log(pricesObject);
