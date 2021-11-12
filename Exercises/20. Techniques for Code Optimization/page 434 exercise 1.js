/*
A Common-Sense Guide to Data Structures and Algorithms, by Jay Wengrow

Page 434, Exercise 1

You’re working on software that analyzes sports players. Following are
two arrays of players of different sports

You are to write a function that accepts two arrays of players and returns
an array of the players who play in both sports. In this case, that would be:
["Jill Huang", "Wanda Vakulskas"]

While there are players who share first names and players who share last
names, we can assume there’s only one person who has a particular full
name (meaning first and last name).

We can use a nested-loops approach, comparing each player from one
array against each player from the other array, but this would have a
runtime of O(N * M). Your job is to optimize the function so that it can
run in just O(N + M).
*/

function findMultiGamePlayers(firstSportGame, secondSportGame) {
	const hashTableOfPlayers = {};
	const crossedGamePlayers = [];
  
	for ({ firstName, lastName } of firstSportGame)
 		hashTableOfPlayers[`${firstName} ${lastName}`] = true;

	for ({ firstName, lastName } of secondSportGame)
		if (hashTableOfPlayers[`${firstName} ${lastName}`])
          crossedGamePlayers.push(`${firstName} ${lastName}`);

  return crossedGamePlayers;
}


const basketballPlayers = [
{firstName: "Jill", lastName: "Huang", team: "Gators"},
{firstName: "Janko", lastName: "Barton", team: "Sharks"},
{firstName: "Wanda", lastName: "Vakulskas", team: "Sharks"},
{firstName: "Jill", lastName: "Moloney", team: "Gators"},
{firstName: "Luuk", lastName: "Watkins", team: "Gators"}
]

const footballPlayers = [
{firstName: "Hanzla", lastName: "Radosti", team: "32ers"},
{firstName: "Tina", lastName: "Watkins", team: "Barleycorns"},
{firstName: "Alex", lastName: "Patel", team: "32ers"},
{firstName: "Jill", lastName: "Huang", team: "Barleycorns"},
{firstName: "Wanda", lastName: "Vakulskas", team: "Barleycorns"}
]

console.log(findMultiGamePlayers(basketballPlayers, footballPlayers))
