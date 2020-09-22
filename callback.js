// Callback

// Sync callback function
const sayMyName = (name, callback) => {
  console.log(`My name is ${name}`);
  callback();
};

function callBackFunc() {
  console.log("Wonderful");
}

sayMyName("Samir", callBackFunc);

// Async callback function
console.log("First");

setTimeout(() => {
  console.log("Timeout Function");
}, 2000);

console.log("End");
