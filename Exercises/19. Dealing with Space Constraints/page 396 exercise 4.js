/*
A Common-Sense Guide to Data Structures and Algorithms, by Jay Wengrow

Page 396, Exercise 4

Following are three different implementations of a function that accepts an
array of numbers and returns an array containing those numbers multiplied
by 2. For example, if the input is [5, 4, 3, 2, 1], the output will be [10, 8, 6, 4, 2].*/

function doubleArray1(array) {
	let newArray = [];
	for(let i = 0; i < array.length; i++) {
		newArray.push(array[i] * 2);
	}
	return newArray;
}

function doubleArray2(array) {
	for(let i = 0; i < array.length; i++) {
		array[i] *= 2;
	}
	return array;
}

function doubleArray3(array, index=0) {
	if (index >= array.length) return;
	array[index] *= 2;
	doubleArray3(array, index + 1);
	return array;
}

/*
Fill in the table that follows to describe the efficiency of these three versions
in terms of both time and space:
Version 	Time Complexity	 Space Complexity
Version #1 		O(N) 				O(N)
Version #2	 	O(N) 				O(1)
Version #3 		O(N) 				O(N)

In all three cases we iterate through the same amount elements (one after another) which gives us time complexity O(N).
As for space compexity, the first function returns a new array with our N elements. The third one uses a recursive function call.
Even though the function doesn't produce a new array it puts into stack as many function calls as there are elements in the array.
The second is the least used space. It only mutates the existing array assigning a new value to the same cell in memory.
*/

