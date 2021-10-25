/*

Chapter 13 Page 219

To partition an array is to take a random value from the array—which is then
called the pivot—and make sure that every number that is less than the pivot
ends up to the left of the pivot, and that every number greater than the pivot
ends up to the right of the pivot.

you have an array in random order, and you do not need to sort it,
but you do want to know the tenth-lowest value in the array, or the
fifth-highest. This can be useful if we had a lot of test grades and want to
know what the 25th percentile was, or if we want to find the median grade.

Like Quicksort, Quickselect relies on partitioning, and can be
thought of as a hybrid of Quicksort and binary search.
*/



class QuickSelectWithPartition {
	#array = [];
	
	constructor(array = []) {
		if (!Array.isArray(array)) throw "It is not an array";
		this.#array = array;
	}
	
	#partition = (leftPointer, rightPointer) => {
		let pivotIndex = rightPointer;
		let pivot = this.#array[pivotIndex];
		
		rightPointer--;
		
		while (true) {
			while (this.#array[leftPointer] < pivot) {
				leftPointer++;
			}
			while (this.#array[rightPointer] > pivot) {
				rightPointer--;
			}
			if (leftPointer >= rightPointer) {
				break;
			} else {
				[this.#array[leftPointer], this.#array[rightPointer]] = 
					[this.#array[rightPointer], this.#array[leftPointer]];
				leftPointer++
			}	
		}
		[this.#array[leftPointer], this.#array[pivotIndex]] = 
			[this.#array[pivotIndex], this.#array[leftPointer]]
		return leftPointer;
	}
	
	quickselect = (nthLowestValue, leftIndex = 0, rightIndex = this.#array.length - 1) => {
		if (this.#array.length === 0) return;
		
		if (rightIndex - leftIndex <= 0) return this.#array[leftIndex];
                 
		const pivotIndex = this.#partition(leftIndex, rightIndex);
		
		return nthLowestValue < pivotIndex
		? this.quickselect(nthLowestValue, leftIndex, pivotIndex - 1)
		: (nthLowestValue > pivotIndex)
		? this.quickselect(nthLowestValue, pivotIndex + 1, rightIndex)
		: this.#array[pivotIndex];
	}
	
}
const array = [0, 50, 20, 10, 60, 30];

console.log(new QuickSelectWithPartition(array).quickselect(0))