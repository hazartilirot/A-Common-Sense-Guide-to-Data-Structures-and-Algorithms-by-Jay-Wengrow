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
export default LinkedList;