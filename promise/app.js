console.log("Without Promise");

let count = 0;

console.log("Before the for loop");

for (let i = 0; i <= 100000000; i++) {
  count += i;
}

console.log("Count: " + count);

console.log("After the for Loop");

console.log("***********************************");
