/*
A Common-Sense Guide to Data Structures and Algorithms, by Jay Wengrow

Page 197, Exercise 3

Here is a solution to the “Unique Paths” problem from an exercise in the
previous chapter. Use memoization to improve its efficiency:

def unique_paths(rows, columns)
	return 1 if rows == 1 || columns == 1
	return unique_paths(rows - 1, columns) + unique_paths(rows, columns - 1)
end
*/

const unique_paths_memo = (rows, columns) =>
  return function memoized(r, c, memo = {}) {
    if (r === 1 || c === 1) return 1;

    if (!memo[[r, c]])
      memo[[r, c]] = memoized(r - 1, c, memo) + memoized(r, c - 1, memo);

    return memo[[r, c]]
  }(rows, columns);

console.log(unique_paths_memo(5, 5));

/*MIND we incapuslate our memoization from a developer leaving the exact interface he needs.*/