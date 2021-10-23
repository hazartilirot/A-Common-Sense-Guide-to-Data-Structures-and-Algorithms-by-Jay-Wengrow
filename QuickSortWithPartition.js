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
		this.#array = array;
	}
	
	#partition = (leftPointer, rightPointer) => {
		
		let pivot_index = rightPointer;
		let pivot = this.#array[pivot_index];
		
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
			}	else {
				[this.#array[leftPointer], this.#array[rightPointer]] = 
					[this.#array[rightPointer], this.#array[leftPointer]];
				leftPointer++;
			}
		}
		
		[this.#array[leftPointer], this.#array[pivot_index]] = 
			[this.#array[pivot_index], this.#array[leftPointer]]
		
		return leftPointer;
	}
	
	quicksort = (left_index = 0, right_index = this.#array.length - 1) => {
		if (this.#array.length === 0) return;
		
		if (right_index - left_index <= 0) return;
		
		const pivot_index = this.#partition(left_index, right_index);
		
		this.quicksort(left_index, pivot_index - 1);
		
		this.quicksort(pivot_index + 1, right_index);
		
		return this.#array;
	
	}
}
const array = [0, 5, 2, 1, 6, 3]

console.log(new QuickSortWithPartition(array).quicksort())