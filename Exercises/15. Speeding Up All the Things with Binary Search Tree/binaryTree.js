class Node {
	#leftChild;
	#rightChild;
	#value;
  
	constructor(value, leftChild, rightChild) {
		this.#value = value;
		this.#leftChild = leftChild;
		this.#rightChild = rightChild;
	}
    
    get leftChild() { return this.#leftChild; }
    get rightChild() { return this.#rightChild; }
    get value() { return this.#value; }
    
    set leftChild(node) { this.#leftChild = node; }
    set rightChild(node) { this.#rightChild = node; }
    set value(value) { this.#value = value; }
}


export default class createBinaryTree {
	
	#rootNode;
	
	constructor(rootNode) {
		this.#rootNode = rootNode;
	}

	search(value) { 
        if (value === undefined) throw new Error('Please, provide a value');
        
        return (function searchNode(value, node) {
            if (node === undefined) 
                return null;
            
            console.log(node.value)
              
            return (node.value === value)
                ? node
                : value < node.value 
                ? searchNode(value, node.leftChild)
                : searchNode(value, node.rightChild);
	
        })(value, this.#rootNode)
    }
	
	insert(value) {
		(function insertNode(value, node) {
            if (value === node.value)
				console.log(`${value} already exists in the tree`)
                
            value < node.value ? (
				node.leftChild === undefined
					? node.leftChild = new Node(value)
					: insertNode(value, node.leftChild)
			) : (
				node.rightChild === undefined
					? node.rightChild = new Node(value)
					: insertNode(value, node.rightChild)
			)
            
		})(value, this.#rootNode)
	}
    
       	
	delete(value) {
		(function deleteNode(value, node){
			if (node === undefined) {
				return undefined;
			} else if (node.value > value) { 
				node.leftChild = deleteNode(value, node.leftChild)
				return node;
			} else if (node.value < value) {
				node.rightChild = deleteNode(value, node.rightChild)
				return node;
			} else if (value === node.value) {
				if (node.leftChild === undefined) {
					return node.rightChild;
				} else if (node.rightChild === undefined) {
					return node.leftChild;
				} else {
					node.rightChild = findSuccessor(node.rightChild, node)
                    return node;
				}
			}
            
            function findSuccessor(node, nodeToDelete) {
                if (node.leftChild !== undefined) {
                    node.leftChild = findSuccessor(node.leftChild, nodeToDelete)
                    return node;
                } else {
                    nodeToDelete.value = node.value
                    return node.rightChild;
                }
            }
        })(value, this.#rootNode)
	}
	
	get rootNode() { return this.#rootNode; }
}


const binaryTree = new createBinaryTree(new Node(50));


binaryTree.insert(25);
binaryTree.insert(75);

binaryTree.insert(10);
binaryTree.insert(33);
binaryTree.insert(56);
binaryTree.insert(89);

binaryTree.insert(4);
binaryTree.insert(11)
binaryTree.insert(30);
binaryTree.insert(40);
binaryTree.insert(52);
binaryTree.insert(61);
binaryTree.insert(82);
binaryTree.insert(95);

          

binaryTree.delete(4);
binaryTree.delete(10)
binaryTree.delete(56)
binaryTree.delete(50)

binaryTree.search(95);