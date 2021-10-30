/*
The Fibonacci sequence is a mathematical sequence of numbers that goes
like this until infinity:
0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55…
This sequence begins with the numbers 0 and 1, and each subsequent
number is the sum of the previous two numbers of the sequence. For example,
the number 55 was computed because it is the sum of the previous two
numbers, which are 21 and 34.
*/

const fibonacci = num => {
  return function fibo(n, memo = {}) {

    if (n === 0 || n === 1) return n;
    
    if (!memo[n])
        memo[n] = fibo(n - 2, memo) + fibo(n - 1, memo);

    return memo[n]
  }(num);
}

console.log(fibonacci(6));

/*MIND the time complexity of a basic recursion of fibonacci is O(2^n). 
Memoization prevents a function from redundant calls. We get O(2N - 1) which is the same as O(N) liniar.*/