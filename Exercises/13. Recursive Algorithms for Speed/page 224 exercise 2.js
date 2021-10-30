/*
A Common-Sense Guide to Data Structures and Algorithms, by Jay Wengrow

Page 224, Exercise 2

The following function finds the “missing number” from an array of integers.
That is, the array is expected to have all integers from 0 up to the
array’s length, but one is missing. As examples, the array, [5, 2, 4, 1, 0] is
missing the number 3, and the array, [9, 3, 2, 5, 6, 7, 1, 0, 4] is missing the
number 8.

*/

const findAMissingNumber = array => 
  [...array]
    .sort((a, b) => a < b ? -1 : 1)
    .findIndex((e, i) => e !== i)

	
console.log(findAMissingNumber([5, 2, 4, 1, 0]));
console.log(findAMissingNumber([9, 3, 2, 5, 6, 7, 1, 0, 4]));

/*The time complexity is evalueted by the highest O(N log N) - sorting itself*/