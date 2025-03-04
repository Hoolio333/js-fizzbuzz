// TODO: Write your function in this file

// Write a function that accepts 2 numbers (lower & upper)
// The function should return an array [] contain all numbers from lower to upper (including lower & upper themselves)
// Where number is multiple of three (3,6, 9 etc) the array [] should contain the string 'Fizz' instead of the number
// Where numbers are both multiples of  both three and five (15, 30, etc.) the array should contain the string FizzBuzz instead of the number.

// My thought process:

// No data to be seen so creating the data
// numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15...] - started to do this then realised the loop could should the numbers

// function fizzBuzz(lower, upper) {
//   let result = [];

//   for (let i = lower; i <= upper; i++) {
//     if (i % 3 === 0 && i % 5 === 0) {
//       result.push("FizzBuzz");
//     } else if (i % 3 === 0) {
//       result.push("Fizz");
//     } else if (i % 5 === 0) {
//       result.push("Buzz");
//     } else {
//       result.push(i);
//     }
//   }

// console.log(result);
// return result;
// }

function fizzBuzz(lower, upper) {
  let result = [];

  for (let i = lower; i <= upper; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      result.push("FizzBuzz");
    } else if (i % 3 === 0) {
      result.push("Fizz");
    } else if (i % 5 === 0) {
      result.push("Buzz");
    } else {
      result.push(i);
    }
  }

  console.log(result);
  return result;
}

// To show the result in console:
// Shows the result of the function & the new array []

// TODO: Change undefined below to the name of your function
module.exports = fizzBuzz;
