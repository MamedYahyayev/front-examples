console.log("Part 6 Start");

// Javascript Array method Part 6
// .reduce(),
// .reduceRight(),
// .reverse(),
// .some(),
// .slice()

// REDUCE
var reduceArray = [1, 2, 3, 4, 5, 6, 7];

var reduceResult = reduceArray.reduce((sum, number) => {
  return sum + number;
});

console.log(reduceResult);

// REDUCE RIGHT
var reduceRightResult = reduceArray.reduceRight(
  (subtract, num) => subtract - num
);

console.log(reduceRightResult);

// REVERSE
console.log(reduceArray.reverse()); // [ 7, 6, 5, 4, 3, 2, 1 ]

// SOME

const evenNumber = (num) => num % 2 === 0;

var someResult = reduceArray.some(evenNumber);

console.log(someResult);

// SORT
const sortedArray = [3, 4, 2, 4, 5, 1, 89, 23, 657, 234, 123, 8, 6];

var sortResult = sortedArray.sort((num1,num2) => num2 - num1);

console.log(sortedArray);
console.log(sortResult);

// sort method changes the initial array values
console.log("Part 6 end");
console.log("----------------------------------------------------");
