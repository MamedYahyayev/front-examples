// IIFE : Immediately Invoked Function Expression

(function () {
  console.log("Hello");
})();

console.log("Final");

var result = (function () {
  var name = "Samir";
  return name;
})();

// Immediately creates output
console.log(result); // Samir

console.log(name); // uncaugth error : name is not defined because variable name is not accessible outside scope


