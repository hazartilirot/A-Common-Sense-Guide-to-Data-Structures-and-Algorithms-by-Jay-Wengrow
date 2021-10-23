/*
A Common-Sense Guide to Data Structures and Algorithms, by Jay Wengrow

Page 181, Exercise 2

Use recursion to write a function that accepts an array of numbers and
returns a new array containing just the even numbers.
*/

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const isEven = n => n % 2 === 0 ? true : false;

const getEvenNumbers = array => {
  
  if (!array.length) return [];
  
  return isEven(array[0])
    ? [array[0], ...getEvenNumbers(array.slice(1, array.length))]
    : getEvenNumbers(array.slice(1, array.length));
  
}

console.log(getEvenNumbers(array));