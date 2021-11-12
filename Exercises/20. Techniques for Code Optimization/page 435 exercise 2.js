/*
A Common-Sense Guide to Data Structures and Algorithms, by Jay Wengrow

Page 435, Exercise 2

You’re writing a function that accepts an array of distinct integers from
0, 1, 2, 3…up to N. However, the array will be missing one integer, and
your function is to return the missing one.
For example, this array has all the integers from 0 to 6, but is missing
the 4: [2, 3, 0, 6, 1, 5]

Therefore, the function should return 4.

The next example has all the integers from 0 to 9, but is missing the 1:
[8, 2, 3, 9, 4, 7, 5, 0, 6]

In this case, the function should return the 1.

Using a nested-loops approach would take up to O(N2). Your job is to
optimize the code so that it has a runtime of O(N).
*/

const findMissingNunber = array => {
    //MIND***! (array.length * (array.length + 1)) / 2 - array.reduce((a, e) => a + e, 0)
  
  let max = array[0]
  let sumOfArray = 0;
  for (let i = 0; i < array.length; i++) {
    if (max < array[i]) 
      max = array[i];
     
    sumOfArray += array[i]
  }
  const sumOfSequence = (max * (max + 1)) / 2;
  /*sumOfSequence and sumOfArray give us the same total, though max is less than the array's length*/
  if (max < array.length && sumOfSequence - sumOfArray === 0)
    return -1;
  
  return sumOfSequence - sumOfArray
}



const arrayA = [2, 3, 0, 6, 1, 5]
const arrayB = [8, 2, 3, 9, 4, 7, 5, 0, 6]
const arrayC = [2, 3, 4, 6, 1, 5]
const arrayD = [0, 2, 3, 4, 6, 1, 5]

console.log(findMissingNunber(arrayA))
console.log(findMissingNunber(arrayB))
console.log(findMissingNunber(arrayC))
console.log(findMissingNunber(arrayD))

/* 
//MIND***! - the method won't work in case there is an array consisting of a complete sequence of numbers, as in arrayD case;
One number must be missing at the very least to make it work correctly.

The second approch is almost identical despite of its verbosity. We don't rely on the length of an array. We're looking for the highest element in the array.
If the sumOfSequence and sumOfArray is equal to each other we check if the highest element is equal to the array's length or there is a zero which makes
the total the same, but also plays a role in a difference between max value and amount of elements.

sumOfSequence is a Gauss formula (N * (N + 1)) / 2
 */