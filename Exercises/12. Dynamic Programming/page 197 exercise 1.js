/*
A Common-Sense Guide to Data Structures and Algorithms, by Jay Wengrow

Page 197, Exercise 1

The following function accepts an array of numbers and returns the sum,
as long as a particular number doesn’t bring the sum above 100. If adding
a particular number will make the sum higher than 100, that number is
ignored. However, this function makes unnecessary recursive calls. Fix
the code to eliminate the unnecessary recursion:

def add_until_100(array)
	return 0 if array.length == 0
	if array[0] + add_until_100(array[1, array.length - 1]) > 100
		return add_until_100(array[1, array.length - 1])
	else
		return array[0] + add_until_100(array[1, array.length - 1])
	end
end
*/

const add_until_100 = array => {
  if (array.length === 0) return 0;
 
  const result = add_until_100(array.slice(1, array.length));
  
  return result +  array[0] > 100 ? result : result + array[0];
}

const arrayA = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 100]; // 100
const arrayB = [1, 2, 3, 4, 5, 6, 100, 7, 8, 9, 10]; // 55
const arrayC = [45, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; // 100

console.log(add_until_100(arrayA))
console.log(add_until_100(arrayB))
console.log(add_until_100(arrayC))

/*MIND we're dealing with a top-down method. Meaning we begin calculating from the end of our array moving to the beginning.
ArrayA - would ignore [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] since the sum of the rest elements goes against our condition > 100.
ArrayB - while calculating 10 + 9 + 8 + 7 (which is 34) + 100 - again it doesn't satisfy our condition. The element would be ignored.
ArrayB - the sum of 1-10 is (n * (n + 1) / 2) is 55 + 45 = 100 - the number suits us fine.
*/
