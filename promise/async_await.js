console.log("Async Await");

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

console.log("Before the async await");

async function printResult() {
  try {
    const count = await promiseFor(0);
    console.log("Count with async await: ", count);
  } catch (err) {
      console.log(err)
  }
}

console.log("After the async await");

printResult();
