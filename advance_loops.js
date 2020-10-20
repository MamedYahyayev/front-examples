// Question #1:
// create a function called biggestNumberInArray() that takes
// an array as a parameter and returns the biggest number.
// biggestNumberInArray([-1,0,3,100, 99, 2, 99]) should return 100;
// Use at least 3 different types of javascript loops to write this:
const array = [-1, 0, 3, 100, 99, 2, 99]; // should return 100
const array2 = ["a", 3, 4, 2]; // should return 4
const array3 = []; // should return 0

// First Type
function biggestNumberInArray(array) {
  let maxNumber = 0;
  for (let i = 0; i < array.length; i++) {
    if (maxNumber < array[i]) {
      maxNumber = array[i];
    }
  }
  console.log("First Type :", maxNumber);
}

biggestNumberInArray(array);

// Second Type
function biggestNumberInArray2(array2) {
  let maxNumber2 = 0;
  array2.forEach((arr) => {
    return maxNumber2 < arr && (maxNumber2 = arr);
  });

  console.log("Second Type: ", maxNumber2);
}

biggestNumberInArray2(array2);

// Third Type
function biggestNumberInArray3(array3) {
  let maxNumber3 = 0;
  for (const arr of array3) {
    maxNumber3 < arr && (maxNumber3 = arr);
  }
  console.log("Third Type: ", maxNumber3);
}

biggestNumberInArray3(array3);

// Question #2:
// Write a function checkBasket() that lets you know if the item is in the basket or not
const amazonBasket = {
  glasses: 1,
  books: 2,
  floss: 100,
};

function checkBasket(basket, lookingFor) {
  for (const item in basket) {
    if (item === lookingFor) {
      console.log("Yes item is in here...");
    }
  }
}

checkBasket(amazonBasket, "books");
