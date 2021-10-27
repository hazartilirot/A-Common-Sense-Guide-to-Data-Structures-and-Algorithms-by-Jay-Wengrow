/*
A Common-Sense Guide to Data Structures and Algorithms, by Jay Wengrow

Page 245, Exercise 3

Add a method to the classic LinkedList class that returns the last element
from the list. Assume you don’t know how many elements are in the list.

*/

import LinkedList from './LinkedList'


class LinkedListCustom extends LinkedList {
	constructor(firstNode = null) {
		super(firstNode);
	}
	
	getLastNode() {
		let currentNode = this.firstNode;
		
		while (currentNode.next !== undefined && currentNode.next !== null) {
			currentNode = currentNode.next;
		}
		return currentNode;
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


console.log(list.getLastNode().data)