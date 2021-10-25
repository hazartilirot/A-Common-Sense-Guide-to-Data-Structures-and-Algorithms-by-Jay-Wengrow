/*
A Common-Sense Guide to Data Structures and Algorithms, by Jay Wengrow

Page 224, Exercise 3

Write three different implementations of a function that finds the greatest
number within an array. Write one function that is O(N2), one that is O(N
log N), and one that is O(N).

*/

const findTheGreatestNsq = array => {
	
	for(let i = 0; i < array.length; i++) {
		
		let flag = true;
		
		for(let j = 0; j < array.length; j++) {
			if (array[i] < array[j]) {
				flag = false;
			}
		}
		if (flag) return array[i]
	}
}

const findTheGreatestNlogN = array => 
	[...array]
		.sort((a, b) => a < b ? -1 : 1)[array.length - 1]


const findTheGreatestN = array => {
  let max = array[0];
  array.forEach(e => max = Math.max(max, e))
  return max;
}

console.log(findTheGreatestN([9, 3, 2, 5, 10, 6, 7, 1, 0, 4]));
console.log(findTheGreatestNlogN([9, 3, 2, 5, 6, 7, 1, 0, 4]));
console.log(findTheGreatestNsq([9, 3, 2, 5, 6, 7, 1, 0, 4]));