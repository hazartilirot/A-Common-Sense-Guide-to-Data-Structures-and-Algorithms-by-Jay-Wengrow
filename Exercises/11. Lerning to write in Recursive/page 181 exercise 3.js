/*
A Common-Sense Guide to Data Structures and Algorithms, by Jay Wengrow

Page 181, Exercise 3

There is a numerical sequence known as “Triangular Numbers.” The
pattern begins as 1, 3, 6, 10, 15, 21, and continues onward with the Nth
number in the pattern, which is N plus the previous number. For example,
the 7th number in the sequence is 28, since it’s 7 (which is N) plus 21
(the previous number in the sequence). Write a function that accepts a
*/

const getNthTriangularNum = n => n === 1 ? 1 : n + getNthTriangularNum(n - 1);
 

console.log(getNthTriangularNum(7));