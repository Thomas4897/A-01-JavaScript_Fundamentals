const x = 6;

// 7. Write a function that takes 2 numbers as arguments and returns the sum of both numbers and the variable "x" using without using arrow functions.
function sumPlusX(a, b) {
  const sum = a + b + x;
  return sum;
}
const regFunction = sumPlusX(2, 2);

console.log("\nRegular Function:", regFunction);

// 8. Write a function that takes 2 numbers as arguments and returns the sum of both numbers and the variable "x", using arrow functions.
const fatArrowSumPlusX = (a, b) => {
  const sum = a + b + x;
  return sum;
};

const fatArrowFunction = fatArrowSumPlusX(3, 3);

console.log("\nFat Arrow Function:", fatArrowFunction);

// 9. Write a function that returns another function. (use arrow functions please)
const returnAnotherFunction = (a, b) => {
  return fatArrowSumPlusX(a, b);
};

const returnsFunction = returnAnotherFunction(4, 4);

console.log("\nFunction Returns Function:", returnsFunction);

// 10. given the following code:
const getFunction = () => {
  const y = 5;

  const insideFunc = (a) => y + a;

  return insideFunc;
};

console.log("\ngetfunction(insideFunc()):", getFunction()(2));

// Explain why the function that returns from getFunction still has access to "y" if "y" is not a global variable.
//! The variable 'y' and the 'insideFunc' are both within the Closures so the 'insideFunc' has access to it.

// 11. write a function that takes "couldThrowError()" as a callback argument.
// within that function call "couldThrowError" and console log its result.
// Make sure to handle errors that could be thrown by "couldThrowError()"

const couldThrowError = () => {
  if (Math.ceil(Math.random() * 2) < 2) {
    throw new Error("Error was thrown");
  }

  return "success";
};

const isGreaterThanTwo = (callback) => {
  try {
    let x = callback();

    console.log("\nisGreaterThanTwo try:", x);
  } catch (e) {
    console.log("\nisGreaterThanTwo catch:", e.message);
  }
};

isGreaterThanTwo(couldThrowError);

console.log("");
