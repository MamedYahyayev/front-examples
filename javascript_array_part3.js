console.log("Part 3 Start");

// Array Methods Part 3 :
// forEach()
// from()
// indexOf()
// includes()

// FOR_EACH
let forEachArray = [1, 2, 3, 4, 5];

forEachArray.forEach(num => {
    console.log(num)
})


// FROM

let products = ["Cola" , "Sprite" , "Fanta"]

let copyProducts = Array.from(products);

console.log(copyProducts); //  ["Cola" , "Sprite" , "Fanta"]


// INDEX_OF
const productsIndex = products.indexOf("Sprite");
console.log(productsIndex) // 2


// INCLUDES 

let isInclude = products.includes("Cola")

console.log(isInclude) // true

isInclude = products.includes("Coffee")

console.log(isInclude) // false

console.log("Part 3 end")
console.log("----------------------------------------------------")


