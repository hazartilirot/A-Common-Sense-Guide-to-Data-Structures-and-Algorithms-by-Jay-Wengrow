/*Unnecessary Recursive Calls

function that finds the greatest number from an array:

def max(array)

	return array[0] if array.length == 1

	if array[0] > max(array[1, array.length - 1])
		return array[0]

	else
		return max(array[1, array.length - 1])
	end
end
*/

const findMaxInArrayRecursively = array => {
  if (array.length === 1) return array[0];

  const half = findMaxInArrayRecursively(array.slice(1, array.length));
  
  if (array[0] > half) 
    return array[0]
  else 
    return half;

}

console.log(findMaxInArrayRecursively([1, 2, 3, 4]));

/*MIND the example shown in the book has two recursive calls which make time complexity of the main function O(2^n - 1)
wheras in the actual implementation we did a huge improvement in efficiency of the algorithm. We store the result in a variable.
*/