/*
The Fibonacci sequence is a mathematical sequence of numbers that goes
like this until infinity:
0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55…
This sequence begins with the numbers 0 and 1, and each subsequent
number is the sum of the previous two numbers of the sequence. For example,
the number 55 was computed because it is the sum of the previous two
numbers, which are 21 and 34.
*/

const fibonacci = n => {
	let [a, b, temp, i] = [0, 1, 0, 0]
	const result = [];
	
  for (i; i <= n; i++) {
		result.push(a);
		temp = a;
		a = b;
		b = a + temp;
	}
	return result;
}

console.log(fibonacci(10));

/*Time complexity is liniar which is O(N)*/