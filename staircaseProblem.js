/*
A Common-Sense Guide to Data Structures and Algorithms, by Jay Wengrow

Page 173, Staircase problem

Let’s say we have a staircase of N steps, and a person has the ability to climb
one, two, or three steps at a time. How many different possible “paths” can
someone take to reach the top? Write a function that will calculate this for N
steps.
*/

/*MIND THE TRICK! 
  once variable stairs reaches 2 the third call would hit a negative value. We return 0;
  we want the sum of all three calls to be 2. We force the second call return 1. 
  
  an alternative way is to use a reduce function which actually looks verbose and doesn't save space*/

const goUpstairs = stairs => {
  
  if (stairs < 0) return 0;
  if (stairs === 1 || stairs === 0) return 1;
  
  return goUpstairs(stairs - 1) + goUpstairs(stairs - 2) + goUpstairs(stairs - 3)
  //return Array(3).fill(0).reduce((a, e, i) => a + goUpstairs(stairs - (i + 1)), 0)
}

console.log(goUpstairs(4))
