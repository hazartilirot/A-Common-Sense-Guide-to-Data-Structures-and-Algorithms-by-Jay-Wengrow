/*
A Common-Sense Guide to Data Structures and Algorithms, by Jay Wengrow

Page 384, Exercise 4

In this chapter, I only provided the code for breadth-first traversal, as
discussed in Breadth-First Search, on page 348. That is, the code simply
printed the value of each vertex. Modify the code so that it performs an
actual search for a vertex value provided to the function. (We did this for
depth-first search.) That is, if the function finds the vertex it’s searching
for, it should return that vertex’s value. Otherwise, it should return null
*/

import Vertex from 'Graph';

class VertexModified extends Vertex {
	constructor(value) {
		super(value);
	}
	//overridden
	static traverseBFS(startingVertex, searchValue) {
		const markedAsVisited = {}
		const queue = new Queue();
		
		markedAsVisited[startingVertex.value] = true;
		
		queue.enqueue(startingVertex);
		
		while (queue.read()) {
			let currentVertex = queue.dequeue();
			
			if (currentVertex.value === searchValue) 
				return currentVertex;
			
			for (let vertex of currentVertex.adjacentVertices) {
				if (!markedAsVisited[vertex.value]) {
                    markedAsVisited[vertex.value] = true;
                } else {
                    continue;
                }
				queue.enqueue(vertex);
			}
		}
		return null;
	}
}

const alice = new VertexModified('Alice');
const bob = new VertexModified('Bob');
const fred = new VertexModified('Fred');
const helen = new VertexModified('Helen');
const candy = new VertexModified('Candy');
const derek = new VertexModified('Derek');
const elaine = new VertexModified('Elaine');
const gina = new VertexModified('Gina');
const irena = new VertexModified('Irena');

alice.insertAdjacentVertex([bob, candy, derek, elaine]);

bob.insertAdjacentVertex(fred);
fred.insertAdjacentVertex(helen);
helen.insertAdjacentVertex(candy);

derek.insertAdjacentVertex([elaine, gina]);
gina.insertAdjacentVertex(irena);


const vertex = VertexModified.traverseBFS(alice, 'Derek');
if (vertex !== null)
	console.log(vertex.value)