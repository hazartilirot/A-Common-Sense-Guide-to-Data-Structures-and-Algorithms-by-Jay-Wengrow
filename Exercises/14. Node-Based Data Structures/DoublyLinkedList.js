class Node {
	#data;
	#nextNode;
	#previousNode;
	
	constructor(data) {
		this.#data = data;
	}
	
	set previous(value) { this.#previousNode = value; }
	set next(value) { this.#nextNode = value; }
	
	get previous() { return this.#previousNode; }
	get next() { return this.#nextNode; }
    
    get data() { return this.#data }
}

class DoublyLinkedList {
	#firstNode;
	#lastNode;
    
	constructor(firstNode = null, lastNode = null) {
		this.#firstNode = firstNode;
		this.#lastNode = lastNode;
	}
	
	attachListTail(value) {
		const newNode = new Node(value);
		
		if (!this.#firstNode) {
			this.#firstNode = newNode;
			this.#lastNode = newNode;
		} else {
			newNode.previous = this.#lastNode;
			this.#lastNode.next = newNode;
			this.#lastNode = newNode;
		}
	}
	
	removeListHead() {
		const removedHead = this.#firstNode;
        if (!this.#firstNode.next) {
            this.#firstNode = null;
            this.#lastNode = null;
        } else {
            this.#firstNode = this.#firstNode.next;
        }
		return removedHead;
	}
	
	get firstNode() { return this.#firstNode; }
	get lastNode() { return this.#lastNode; }
}
export default DoublyLinkedList;