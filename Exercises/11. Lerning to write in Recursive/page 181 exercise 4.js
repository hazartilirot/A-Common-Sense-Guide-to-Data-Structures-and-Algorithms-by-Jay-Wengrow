/*
A Common-Sense Guide to Data Structures and Algorithms, by Jay Wengrow

Page 181, Exercise 4

Use recursion to write a function that accepts a string and returns the
first index that contains the character “x.” For example, the string,
"abcdefghijklmnopqrstuvwxyz" has an “x” at index 23. To keep things simple,
assume the string definitely has at least one “x.”
*/


const getIndexOfLetter = (string, letter) =>{
  
  const lengthOfMain = string.length;
  
  return fn(string);
  
  function fn(string) {
    
    if (string[0] === letter || string.length === 0) return 0;

    const counter = 1 + fn(string.substring(1, string.length))

    return (counter === lengthOfMain && string[0] !== letter) ? -1 : counter;  
  };
  
}
 
console.log(getIndexOfLetter('abcdefghijklmnopqrstuvwxyz', 'x'));
