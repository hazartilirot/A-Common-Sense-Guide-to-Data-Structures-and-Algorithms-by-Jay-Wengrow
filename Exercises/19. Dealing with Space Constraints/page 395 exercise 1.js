/*
A Common-Sense Guide to Data Structures and Algorithms, by Jay Wengrow

Page 395, Exercise 1

Describe its space complexity in terms of Big O:*/

function wordBuilder(array) {
	let collection = [];
	
	for(let i = 0; i < array.length; i++) {
		for(let j = 0; j < array.length; j++) {
			if (i !== j) {
				collection.push(array[i] + array[j]);
			}
		}
	}
	return collection;
}

/*
ANSWER: O(N^2). The nested loop would double the amount of elements in a new array. 
Though each element would consist of two letters which give us 12 in total.
*/

