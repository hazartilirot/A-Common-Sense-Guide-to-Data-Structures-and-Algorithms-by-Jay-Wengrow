/*
A Common-Sense Guide to Data Structures and Algorithms, by Jay Wengrow

Page 436, Exercise 5

You’re creating software that analyzes the data of body temperature
readings taken from hundreds of human patients. These readings are
taken from healthy people and range from 97.0 degrees Fahrenheit to
99.0 degrees Fahrenheit. An important point: within this application, the
decimal point never goes beyond the tenths place.

Here’s a sample array of temperature readings:
[98.6, 98.0, 97.1, 99.0, 98.9, 97.8, 98.5, 98.2, 98.0, 97.1]

You are to write a function that sorts these readings from lowest to highest.
If you used a classic sorting algorithm such as Quicksort, this would take
O(N log N). However, in this case, it’s actually possible to write a faster
sorting algorithm.

Yes, that’s right. Even though you’ve learned that the fastest sorts are
O(N log N), this case is different. Why? In this case, there’s a limited
number of possibilities of what the readings will be. In such a case, we
can sort these values in O(N). It may be N multiplied by a constant, but
that’s still considered O(N).

*/

const sortByTemperatureValue = array => {
	const hashTable = {};
	
	array.forEach(e => hashTable[e * 10] ? hashTable[e * 10] += 1 : hashTable[e * 10] = 1);
	
	array.length = 0;
	
	for (let i = 970; i <= 990; i++) {
   		while (hashTable[i] > 0) {
			array.push(i / 10)
			hashTable[i] -= 1;
		}
	}
	return array;
}

const arrayA = [98.6, 98.0, 97.1, 99.0, 98.9, 97.8, 98.5, 98.2, 98.0, 97.1]

console.log(sortByTemperatureValue(arrayA))

