console.log("With Promise");

function promiseFor(count) {
  const promise = new Promise((resolve, reject) => {
    if (count < 0) {
      reject(new Error("The number can not be negative"));
    }
    for (let i = 0; i <= 100000000; i++) {
      count += i;
    }
    resolve(count);
  });

  return promise;
}

console.log("Before the for loop");

promiseFor(0)
  .then((count) => console.log("Count: ", count))
  .catch((err) => console.log(err));

console.log("After the for Loop");

console.log("***********************************");
