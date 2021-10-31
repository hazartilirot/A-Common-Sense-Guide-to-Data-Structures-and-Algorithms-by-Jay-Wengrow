/*
A Common-Sense Guide to Data Structures and Algorithms, by Jay Wengrow

Page 276, Exercise 3

Write an algorithm that finds the greatest value within a binary search tree.
*/

class childOfSearchBinaryTree extends createBinaryTree {
	constructor(rootNode) {
		super(rootNode);
	}
	
	getTheHighestValue() {
		return (function traverse(node){
            return node.rightChild !== undefined
				? traverse(node.rightChild)
			    : node.value
		})(super.rootNode)
	}
  
    getTheLowestValue() {
		return (function traverse(node){
            return node.leftChild !== undefined
				? traverse(node.leftChild)
			    : node.value
		})(super.rootNode)
	}
}
          
          
          
const binaryTree = new childOfSearchBinaryTree(new Node(50));


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
          
const max = binaryTree.getTheHighestValue()
const min = binaryTree.getTheLowestValue()
console.log(min, max)