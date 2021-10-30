/*
A Common-Sense Guide to Data Structures and Algorithms, by Jay Wengrow

Page 224, Exercise 1

Given an array of positive numbers, write a function that returns the
greatest product of any three numbers. The approach of using three
nested loops would clock in at O(N3), which is very slow. Use sorting to
implement the function in a way that it computes at O(N log N) speed.
(There are even faster implementations, but we’re focusing on using
sorting as a technique to make code faster.)

*/

const getTheMaxSum = (array, theSumOf) => 
  [...array].sort((a, b) => (a < b) ? -1 : 1)
    .slice(-theSumOf)
    .reduce((a,i) => a * i, 1)
	

console.log(getTheMaxSum([5, 2, 4, 1, 3], 3));

/*The time complexity is evalueted by the highest O(N log N) - sorting itself*/