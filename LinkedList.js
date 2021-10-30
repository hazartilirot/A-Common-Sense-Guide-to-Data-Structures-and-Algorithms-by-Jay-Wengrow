class Node {
	#data;
	#nextNode;
	
	constructor(data) {
		this.#data = data;
	}
	
	set next(value) { this.#nextNode = value; }
	
	get next() { return this.#nextNode; }
    
    get data() { return this.#data; }
}

class LinkedList {
	#firstNode;
    
	constructor(firstNode = null) {
		this.#firstNode = firstNode;
	}
	
	read(index = 0) {
		let currentIndex = 0;
		let currentNode = this.#firstNode;
		
		while (currentIndex < index) {
			if (!currentNode.next) break;
          
			currentNode = currentNode.next;
			currentIndex++
		}
		return currentNode;
	}
	
	indexOf(value) {
		let index = 0;
		let currentNode = this.#firstNode;
		
		while (currentNode.next && currentNode.data !== value) {
          
			currentNode = currentNode.next;
			index++;
		}
      return currentNode.data === value ? index : -1;
	}
	
	insertAtIndex(value, index = 0) {
		const newNode = new Node(value);
        let currentIndex = 0;
		let currentNode = this.#firstNode;
      
		if (index === 0) {
			newNode.next = currentNode;
			this.#firstNode = newNode;
			return;
		}
		
		/*MIND THE TRICK! we need a preceding node going before the actual position*/
		while (currentIndex < index - 1) {
			currentNode = currentNode.next;
			currentIndex++;
		}
		newNode.next = currentNode.next;
		currentNode.next = newNode;		
	}
	
    deleteAtIndex(index = 0) {
        let currentIndex = 0;
        let currentNode = this.#firstNode;
        
        if (index === 0) {
          currentNode = currentNode.next;
          return
        }
      
        while (currentIndex < index - 1) {
            currentNode = currentNode.next;
            currentIndex++;
        }
        
        currentNode.next = currentNode.next.next;
    }          
                
	get firstNode() { return this.#firstNode; }
}

const list = new LinkedList();

list.insertAtIndex('Yellow') /* Yellow is the 6th element in a queue */
list.insertAtIndex('Green')
list.insertAtIndex('Red')
list.insertAtIndex('Purple')
list.insertAtIndex('Magenta')
list.insertAtIndex('Cyan')
list.insertAtIndex('Brown')
list.insertAtIndex('Pink',  6)  /* Yellow becomes the 7th in the queue */
console.log(list.indexOf('Pink')) /* Is Pink the 6th in the queue ? */
console.log(list.read(7).data) /* Is Yellow the 7th in the queue? */
console.log(list.read(1).data) /* Brown is the 2nd in the queue */
list.deleteAtIndex(1) /* Brown is deleted at its index */
console.log(list.read(1).data) /* Magenta becomes the 2nd in the queue */
console.log(list.read(6).data) /* Yellow susequently moves to its 6th position */