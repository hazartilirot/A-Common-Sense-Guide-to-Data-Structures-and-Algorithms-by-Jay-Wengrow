/*
Page 429

Anagrams is solved as a different data structure (hashTables);

The time complexity is O(N + M); 
JSON.stringify is used on both objects in order to compare objects as strings.
split isn't used in favour of space complexity
*/

const areAnagrams = (firstString, secondString) => {
	const firstHashTable = {};
	const secondHashTable = {};
  
    for (c of firstString)
      firstHashTable[c] ? firstHashTable[c] += 1 : firstHashTable[c] = 1;
	
    for (c of secondString)
      secondHashTable[c] ? secondHashTable[c] += 1 : secondHashTable[c] = 1;

	return JSON.stringify(firstHashTable) === JSON.stringify(secondHashTable)
}

console.log(areAnagrams('startle', 'starlet'));