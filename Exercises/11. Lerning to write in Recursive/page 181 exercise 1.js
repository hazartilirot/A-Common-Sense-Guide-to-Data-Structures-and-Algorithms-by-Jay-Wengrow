/*
A Common-Sense Guide to Data Structures and Algorithms, by Jay Wengrow

Page 181, Exercise 1

Use recursion to write a function that accepts an array of strings and
returns the total number of characters across all the strings. For example,
if the input array is ["ab", "c", "def", "ghij"], the output should be 10 since there
are 10 characters in total.
*/

const arrayA = ["ab", "c", "def", "ghij"];
const arrayB = ["ab", "c", "def", "ghij", "ab", "c", "def", "ghij"];

const characterCounter = (array) => array.length === 0 
  ? 0
  : array[0].length + characterCounter(array.slice(1, array.length))

console.log(countCharacters(arrayB));