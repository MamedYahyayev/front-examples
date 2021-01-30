// Currying in Javascript

function curry(f) {
  return function (a) {
    return function (b) {
      return f(a, b);
    };
  };
}

function sum(a, b) {
  return a + b;
}

let curriedSum = curry(sum);

console.log(curriedSum(1)(2));

// Logging with Currying

function logging(func) {
  return function (date) {
    return function (logMode) {
      return function (message) {
        return func(date, logMode, message);
      };
    };
  };
}

function logger(date, logMode, message) {
  console.log(date, logMode, message);
}

const log = logging(logger);

log(new Date())("DEBUG")("This is debug message");
