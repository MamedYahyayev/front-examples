let count = 0;

console.log("Count in Global: ", count);

function increment() {
  console.log("Count in Outer Function: ", count);
  return function incrementCount() {
    count++;
    console.log("Count in Inner Function: ", count);
  };
}

const secondIncrement = increment();
secondIncrement();
secondIncrement();

console.log("Count in GLobal after the increment:", count);
