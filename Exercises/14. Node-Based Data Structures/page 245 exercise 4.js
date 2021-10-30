/*
A Common-Sense Guide to Data Structures and Algorithms, by Jay Wengrow

Page 245, Exercise 4

Add a method to the classic LinkedList class that
reverses the list. That is, if the original list is A -> B -> C, all of the list’s
links should change so that C -> B -> A.

*/

import LinkedList from './LinkedList'


class LinkedListCustom extends LinkedList {
	constructor(firstNode = null) {
		super(firstNode);
	}
	
	printAllElements() {
		let index = 1;
		let currentNode = this.firstNode;
		
		while (currentNode !== undefined && currentNode !== null) {
			console.log(currentNode.data);
            currentNode = currentNode.next;
		}
	}
  
    reverseList() {
        let previousNode;
        let currentNode = this.firstNode;
        let nextNode;
        
        while (currentNode) {
            nextNode = currentNode.next;
            currentNode.next = previousNode;
            previousNode = currentNode;
            currentNode = nextNode;
        }
        
        this.firstNode = previousNode;
    }
}

const list = new LinkedListCustom();

list.insertAtIndex('Yellow')
list.insertAtIndex('Green')
list.insertAtIndex('Red')
list.insertAtIndex('Purple')
list.insertAtIndex('Magenta')
list.insertAtIndex('Cyan')
list.insertAtIndex('Brown')
list.insertAtIndex('Pink',  6)
list.reverseList();
list.printAllElements();