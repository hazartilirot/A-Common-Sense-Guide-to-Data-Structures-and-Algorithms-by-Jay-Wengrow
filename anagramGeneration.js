/*
A Common-Sense Guide to Data Structures and Algorithms, by Jay Wengrow

Page 177, Anagram Generation

Write a function that returns an array of all anagrams of a
given string. An anagram is a reordering of all the characters within a string.
For example, the anagrams of "abc" are:


["abc", "bac", "bca", "acb", "cab", "cba"]

MIND THE TRICK
	we used a loop based on an amount of letters + 1 so that we could get "cb" and "bc" from the last slice which is "c";
*/


function anagrams_of(string) {
 
  if (string.length === 1) return [string[0]]

  const collection = [];
  
  const substring_anagrams = anagrams_of(string.substring(1, string.length))
  
  substring_anagrams.forEach(s => 
      Array.from({length: s.length + 1}).forEach((_, i) => {
       
        collection.push(
          s.length === 1 && i === 0 
            ? string[0] + s.slice(0, i + 1)
            : s.slice(0, i) + string[0] + s.slice(i)
        )
      })
  )
  
  return collection;
}

console.log(anagrams_of('abc'));