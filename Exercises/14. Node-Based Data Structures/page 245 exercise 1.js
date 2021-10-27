/*
A Common-Sense Guide to Data Structures and Algorithms, by Jay Wengrow

Page 245, Exercise 1

Add a method to the classic LinkedList class that prints all the elements of
the list.

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

list.printAllElements();
