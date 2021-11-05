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
	
	static traverseDFS(adjancentVertex, markedAsVisited = {}) {
		markedAsVisited[adjancentVertex.#value] = true;
		
		console.log(adjancentVertex.#value);
		
		adjancentVertex.#adjacentVertices.forEach(currentVertex => {
			if (markedAsVisited[currentVertex.#value]) 
				return;
			Vertex.traverseDFS(currentVertex, markedAsVisited)
		})
	}
	
    printAdjacentVertices() {
      this.#adjacentVertices.forEach(vertex => console.log(vertex.#value))
    }
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

Vertex.traverseDFS(alice);

