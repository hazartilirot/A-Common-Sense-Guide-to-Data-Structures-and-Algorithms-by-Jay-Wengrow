/*
A Common-Sense Guide to Data Structures and Algorithms, by Jay Wengrow

Page 395, Exercise 2

Following is a function that reverses an array. Describe its space complexity
in terms of Big O:*/

function reverse(array) {
	let newArray = [];
	for (let i = array.length - 1; i >= 0; i--) {
		newArray.push(array[i]);
	}
	return newArray;
}

/*
ANSWER: O(N). We would be given a new array with the same amount of elements.
*/

