/*
A Common-Sense Guide to Data Structures and Algorithms, by Jay Wengrow

Page 245, Exercise 5

Here’s a brilliant little linked list puzzle for you. Let’s say you have access
to a node from somewhere in the middle of a classic linked list, but not
the linked list itself. That is, you have a variable that points to an instance
of Node, but you don’t have access to the LinkedList instance. In this situation,
if you follow this node’s link, you can find all the items from this middle
node until the end, but you have no way to find the nodes that precede
this node in the list.
Write code that will effectively delete this node from the list. The entire
remaining list should remain complete, with only this node removed.

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
    
    deleteInstance(node) {
      node.data = node.next.data;
      node.next = node.next.next;
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

const instance = list.read(0);
                          
list.deleteInstance(instance);

list.printAllElements();