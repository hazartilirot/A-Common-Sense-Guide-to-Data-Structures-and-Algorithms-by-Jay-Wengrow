/*
A Common-Sense Guide to Data Structures and Algorithms, by Jay Wengrow

Page 396, Exercise 3

Create a new function to reverse an array that takes up just O(1) extra space.*/

function reverse(array) {
  
	for (let i = 0; i < array.length / 2 | 0; i++) {
		[array[i], array[array.length - 1 - i]] = [array[array.length - 1 - i], array[i]]
	}
	return array;
}

console.log(reverse(['a', 'b', 'c', 'd']))      // ["d", "c", "b", "a"]
console.log(reverse(['a', 'b', 'c', 'd', 'e'])) // ["e", "d", "c", "b", "a"]

/*
ANSWER: The following method uses crossed assignments of first and last elements;
*/

