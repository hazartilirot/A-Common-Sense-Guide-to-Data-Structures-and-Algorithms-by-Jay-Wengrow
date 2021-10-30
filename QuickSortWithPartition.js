/*

Chapter 13 Page 199

To partition an array is to take a random value from the array—which is then
called the pivot—and make sure that every number that is less than the pivot
ends up to the left of the pivot, and that every number greater than the pivot
ends up to the right of the pivot.
*/


class QuickSortWithPartition {

	#array = []
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
				leftPointer++;
			}
		}
		
		[this.#array[leftPointer], this.#array[pivotIndex]] = 
			[this.#array[pivotIndex], this.#array[leftPointer]]
		
		return leftPointer;
	}
	
	quicksort = (leftIndex = 0, rightIndex = this.#array.length - 1) => {
		if (this.#array.length === 0) return;
		
		if (rightIndex - leftIndex <= 0) return;
		
		const pivotIndex = this.#partition(leftIndex, rightIndex);
		
		this.quicksort(leftIndex, pivotIndex - 1);
		
		this.quicksort(pivotIndex + 1, rightIndex);
		
		return this.#array;
	
	}
}
const array = [0, 5, 2, 1, 6, 3]

console.log(new QuickSortWithPartition(array).quicksort())