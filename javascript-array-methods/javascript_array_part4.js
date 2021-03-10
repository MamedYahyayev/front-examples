console.log("Part 4 Start");

// Javascript Array method Part 4
// isArray()
// join()
// keys()
// lastIndexOf()

// IS_ARRAY

const jsArray = [1, 2, 3, 4];
const name = "Samir";

console.log(Array.isArray(jsArray)); // true
console.log(Array.isArray(name)); // false


// JOIN 
const joinArray = ["Hello" , "World"]

const secondJoinArray = joinArray.join("#")

console.log(joinArray) // ["Hello" , "World"]
console.log(secondJoinArray) // Hello#World


console.log(joinArray.join(" "))
console.log(joinArray.join("Salam"))
console.log(joinArray.join("!"))
console.log(joinArray.join("-----"))
console.log(joinArray.join("=========="))
console.log(joinArray.join("++++++++++"))

//  Hello World
//  HelloSalamWorld
//  Hello!World
//  Hello-----World
//  Hello==========World
//  Hello++++++++++World

// KEYS
let userNames = ["Eddy", "Joe", "William", "Ratan", "Chris"];
const userKeys = userNames.keys();
for(let key of userKeys){
 console.log(key);
}

// Result
// 0
// 1
// 2
// 3
// 4


// LAST_INDEX_OF

userNames = ["Eddy", "Joe", "William", "Ratan", "Chris" , "Ratan"];
const lastIndex = userNames.lastIndexOf("Ratan");
console.log(lastIndex) // 5
console.log("Part 4 end")
console.log("----------------------------------------------------")
