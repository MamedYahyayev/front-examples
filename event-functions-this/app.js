const button = document.querySelectorAll(".btn");
const justClickMe =  document.getElementById("justClickMe");


// Global
console.log("Global: ", this);

// With Arrow Functions
button.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    console.log("Event: ", this);
  });
});

// With Normal Functions
button.forEach((btn) => {
  btn.addEventListener("click", function (e) {
    console.log("Event: ", this);
    justClickMe.click();
  });
});

justClickMe.addEventListener("click" , () => {
    console.log("Just Click Me Button Clicked...")
})
    

/**
 *  1. this keyword represents Window object in Global Scope.
 *
 *  2. this keyword represents Window object in Event when
 *     we use arrow functions.
 *
 *  3. this keyword represents Event Object in Event when
 *     we use normal functions.
 * 
 * 
 *  Triggering Dom Elements
 *   Okay Let's say I want to call justClickMe button's event
 *   when we click more info buttons , but i don't want to write
 *   same event over and over again , just call with 
 *   justClickMe.click() - this function calls justClickMe button's
 *   click event. But this situation doesn't work all DOM elements
 *
 */
