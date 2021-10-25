/*
Chapter 4 Page 47 
Bubble sort takes each value to its place repeating iteration over and over again for each element.
One pass takes O(N), however as it takes N times to repeat the same iteration for each value the
total time complexity would be O(N^2). Nested loop. N - times takes to compare two elements with one another
and N times to swap two elements. It give us N raised to the power of two.
*/
const bubbleSort = array => {
	let isSorted = false;
	let lastIndex = array.length - 1
	
	while (!isSorted) {
		isSorted = true;
		for (let i = 0; i < lastIndex; i++) {
			if (array[i] > array[i + 1]) {
				[array[i], array[i + 1]] = [array[i + 1], array[i]]
				isSorted = false;
			}

		}
		lastIndex--;
	}
	return array;
}


const array = [4, 2, 7, 1, 3];

console.log(bubbleSort(array));