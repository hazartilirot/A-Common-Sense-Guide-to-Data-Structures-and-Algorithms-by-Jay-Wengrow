/*
A Common-Sense Guide to Data Structures and Algorithms, by Jay Wengrow

Page 197, Exercise 2

The following function uses recursion to calculate the Nth number from
a mathematical sequence known as the “Golomb sequence.” It’s terribly
inefficient, though! Use memoization to optimize it. (You don’t have to
actually understand how the Golomb sequence works to do this exercise.)

def golomb(n)
	return 1 if n == 1
	return 1 + golomb(n - golomb(golomb(n - 1)));
end
*/

const golomb = n => 
  function getGolomb(v, memo = {}){
    if (v == 1) return 1;
  
    if (!memo[v])
      memo[v] = 1 + getGolomb(v - getGolomb(getGolomb(v - 1, memo), memo), memo);
		
    return memo[v];
  }(n);

console.log(golomb(6));

/*MIND if we pass an empty Object as a default argument to a memo parameter, 
we also need to create the parameter in each call otherwise the argument will get lost.
In the expamle the nested function is invoked as an IIF (immediately invoked function)
*/