/*The time complexity of Graph is described as O(V + E)
Where V stands for the total amount of vertices in the graph and
E stands for the amount of edges
*/

import { Queue } from 'QueueDoublyLinkedList'

class Vertex {
	#value;
	#adjacentVertices;
	
	constructor(value) {
		this.#value = value;
        this.#adjacentVertices = [];
	}
	
	insertAdjacentVertex(vertex) {
		if (this.#adjacentVertices.includes(vertex))
			return;
		
		if (Array.isArray(vertex)) {
			this.#adjacentVertices.concat(vertex);
			vertex.forEach(currentVertex => 
				currentVertex.insertAdjacentVertex(this))
			return;
		}
		
		this.#adjacentVertices.push(vertex);
		/*Undirect graph, a mutuality between vertices is added automatically*/
		vertex.insertAdjacentVertex(this);
	}
	
	static traverseDFS(adjacentVertex, markedAsVisited = {}) {
		markedAsVisited[adjacentVertex.#value] = true;
		
		console.log(adjacentVertex.#value);
                        
        for (let vertex of adjacentVertex.#adjacentVertices) {
            if (markedAsVisited[vertex.#value]) continue;
             
            Vertex.traverseDFS(vertex, markedAsVisited)
        }
	}
	
	static searchVertex(adjacentVertex, vertexValue, markedAsVisited = {}) {
        markedAsVisited[adjacentVertex.#value] = true;
		
        for (let vertex of adjacentVertex.#adjacentVertices) {

            if (markedAsVisited[vertex.#value]) continue;       
                        
            if (vertex.#value === vertexValue) return vertex;
              
            const foundVertex = Vertex.searchVertex(vertex, vertexValue, markedAsVisited)
              
            if (foundVertex) return foundVertex;
        }
        return null;
	}
	
	static traverseBFS(startingVertex) {
		const markedAsVisited = {}
		const queue = new Queue();
		
		markedAsVisited[startingVertex.#value] = true;
		
		queue.enqueue(startingVertex);
		
		while (queue.read()) {
			let currentVertex = queue.dequeue();
			
			console.log(currentVertex.#value);
			
			for (let vertex of currentVertex.#adjacentVertices) {
				if (!markedAsVisited[vertex.#value]) {
                    markedAsVisited[vertex.#value] = true;
                } else {
                    continue;
                }
				queue.enqueue(vertex);
			}
		}
	}
	
    printAdjacentVertices() {
      this.#adjacentVertices.forEach(vertex => console.log(vertex.#value))
    }
    
    get value() { return this.#value; }
}

                        
const alice = new Vertex('Alice');
const bob = new Vertex('Bob');
const fred = new Vertex('Fred');
const helen = new Vertex('Helen');
const candy = new Vertex('Candy');
const derek = new Vertex('Derek');
const elaine = new Vertex('Elaine');
const gina = new Vertex('Gina');
const irena = new Vertex('Irena');

alice.insertAdjacentVertex([bob, candy, derek, elaine]);

bob.insertAdjacentVertex(fred);
fred.insertAdjacentVertex(helen);
helen.insertAdjacentVertex(candy);

derek.insertAdjacentVertex([elaine, gina]);
gina.insertAdjacentVertex(irena);

Vertex.traverseDFS(alice); // "Alice""Bob""Fred""Helen""Candy""Derek""Elaine""Gina""Irena"
Vertex.traverseBFS(alice); // "Alice""Bob""Candy""Derek""Elaine""Fred""Helen""Gina""Irena"

const foundVertex = Vertex.searchVertex(alice, 'Bob');
console.log(foundVertex);