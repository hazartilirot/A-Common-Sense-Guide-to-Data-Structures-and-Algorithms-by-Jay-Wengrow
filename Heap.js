class Heap {
	#heap = [];
    
	getRootNode() {
		return this.#heap[0]
	}
	
	getLastNode() {
		return this.#heap[this.#heap.length - 1]
	}
	
	getLeftChildIndex(index) {
		return index * 2 + 1;
	}
	
	getRightChildIndex(index) {
		return index * 2 + 2
	}
	
	getParentIndex(index) {
		return (index - 1) / 2 | 0
	}
	
	insert(value) {
		this.#heap.push(value);
		
		let newNodeIndex = this.#heap.length - 1;
		
		while (newNodeIndex > 0 && 
               this.#heap[newNodeIndex] > this.#heap[this.getParentIndex(newNodeIndex)]) {
			
            [this.#heap[newNodeIndex], this.#heap[this.getParentIndex(newNodeIndex)]] = 
                   [this.#heap[this.getParentIndex(newNodeIndex)] , this.#heap[newNodeIndex]]
			
			newNodeIndex = getParentIndex[newNodeIndex];
		}
	}
    
	delete() {
      
        [this.#heap[0], this.#heap[this.#heap.length - 1]] = 
             [this.#heap[this.#heap.length - 1], this.#heap[0]]
		
		let trickleNodeIndex = 0;
		
		while (this.#isEldestChild(trickleNodeIndex, this.#heap)) {
			
             let maxChildIndex = this.#maxChildIndex(trickleNodeIndex, this.#heap)
             
             const greatValue = this.#heap[maxChildIndex];
             const currentValue = this.#heap[trickleNodeIndex];
            
			[this.#heap[trickleNodeIndex], this.#heap[maxChildIndex]] = [greatValue, currentValue]
          
             trickleNodeIndex = maxChildIndex;
		}
                  
		return this.#heap.pop();
	}
    
    #isEldestChild(index, heap) {
		return heap[this.getLeftChildIndex(index)] && 
			   heap[this.getLeftChildIndex(index)] > heap[index] || 
			   heap[this.getRightChildIndex(index)] && 
			   heap[this.getRightChildIndex(index)] > heap[index]
    }
         
    #maxChildIndex(index, heap) {
		if (heap[this.getRightChildIndex(index)] === undefined) {
			return this.getLeftChildIndex(index)
		}
  
		return heap[this.getRightChildIndex(index)] > heap[this.getLeftChildIndex(index)]
			? this.getRightChildIndex(index)
			: this.getLeftChildIndex(index)
    }     
	
	print() {
		console.log(this.#heap);
	}
}

const heap = new Heap();

heap.insert(100);
heap.insert(88);
heap.insert(25);
heap.insert(87);
heap.insert(16);
heap.insert(8);
heap.insert(12);
heap.insert(86);
heap.insert(50);
heap.insert(2);
heap.insert(15);
heap.insert(3);

heap.print();

heap.delete()

heap.print();