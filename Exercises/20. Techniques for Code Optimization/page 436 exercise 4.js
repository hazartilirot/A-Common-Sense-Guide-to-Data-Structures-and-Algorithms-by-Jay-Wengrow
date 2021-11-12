/*
A Common-Sense Guide to Data Structures and Algorithms, by Jay Wengrow

Page 436, Exercise 4

You’re writing a function that accepts an array of numbers and computes
the highest product of any two numbers in the array. At first glance, this
is easy, as we can just find the two greatest numbers and multiply them.
However, our array can contain negative numbers and look like this:

[5, -10, -6, 9, 4]

In this case, it’s actually the product of the two lowest numbers, -10 and
-6 that yield the highest product of 60.

We could use nested loops to multiply every possible pair of numbers,
but this would take O(N2) time. Your job is to optimize the function so
that it’s a speedy O(N).

*/

const findHighestProduct = array => {
	let minValue = Infinity;
	let nextToMinValue = Infinity
	
	let maxValue = -Infinity;
	let nextToMaxValue = -Infinity;
	
	for (number of array) {
		if (number >= maxValue) {
			nextToMaxValue = maxValue;
			maxValue = number;
		} else if (number < maxValue && number > nextToMaxValue) {
			nextToMaxValue = number;
		}
		
		if (minValue >= number) {
			nextToMinValue = minValue;
			minValue = number;
		} else if (number > minValue && number < nextToMinValue) {
			nextToMinValue = number;
		}
	}
  
	return Math.max(minValue * nextToMinValue, maxValue * nextToMaxValue)
}

const arrayA = [5, -10, -6, 9, 4]
const arrayB = [-5, -4, -3, 0, 3, 4]
const arrayC = [-9, -2, -1, 2, 3, 7]
const arrayD = [-7, -4, -3, 0, 4, 6]
const arrayE = [-6, -5, -1, 2, 3, 9]
const arrayF = [-9, -4, -3, 0, 6, 7]

console.log(findHighestProduct(arrayA))
console.log(findHighestProduct(arrayB))
console.log(findHighestProduct(arrayC))
console.log(findHighestProduct(arrayD))
console.log(findHighestProduct(arrayE))
console.log(findHighestProduct(arrayF))
