/* 
Page 414
A greedy algorithm is one that in each stp chooses what appears to be the best option at that moment in time
*/

/* Array Max */


const max = array => {
	let max = array[0]; 
	
	for (element of array) {
		if (max < element) max = element;
	}
	return max
}

console.log(max([2, -3, 10, 4, 8]))

/* we assume the very first element is the max value in our array. As we go through each element, our algorithm behaves as a child
who's seeing something bigger, gets rid of what he's got collecting a new thing */

/* Largest Subsection Sum */

const maxSumOfSubsection = array => {
	let currentSum = 0;
	let greatestSum = 0;
	
	for (element of array) {
		currentSum + element < 0
			? currentSum = 0
			: currentSum += element
		
		if (greatestSum < currentSum) greatestSum = currentSum;
	}
    return greatestSum;
}


console.log(maxSumOfSubsection([3, -4, 4, -3, 5, 9])) // -3 + 5 + 9 = 15

/* The pattern of the algorithm as following: We begin summing up values ane after another. If the currentSum is less than 0, we assign 0 to a currentSum and carry on; */

/* Greedy Stock Predictions */


const increasingTriples = array => {
  let lowestPrice = array[0];
  let middlePrice = Infinity;
  
  for (element of array) {
    if (lowestPrice >= element)
      lowestPrice = element;
    else if (middlePrice >= element)
      middlePrice = element;
    else
      return [lowestPrice, middlePrice, element]
  }
  return null;
}

console.log(increasingTriples([5, 2, 8, 4, 3, 7])); // [2, 3, 7]
