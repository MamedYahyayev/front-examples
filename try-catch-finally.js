//  Error handling:Try catch finally
let number = -5;
try {
  if (number < 0) throw "Number must be greater than 0";
  if (isNaN(number)) throw "You have to enter number";
} catch (error) {
  console.log(error);
} finally {
  console.log("You entered :" + number);
}
