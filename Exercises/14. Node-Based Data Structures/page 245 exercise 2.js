/*
A Common-Sense Guide to Data Structures and Algorithms, by Jay Wengrow

Page 245, Exercise 2

Add a method to the DoublyLinkedList class that prints all the elements of
the list in reverse order.

*/

import DoublyLinkedList from './DoublyLinkedList';

class DoublyLinkedListCustom extends DoublyLinkedList {
    constructor(firstNode = null, lastNode = null) {
      super(firstNode, lastNode);
    }
  	
    printAllElementsInReverse() {
        let currentNode = this.lastNode;
          
        while (currentNode !== undefined && this.firstNode !== null) {
            console.log(currentNode.data);
            currentNode = currentNode.previous;     
        }
    }
}
               
const list = new DoublyLinkedListCustom();
                     
list.attachToTail('Yellow')
list.attachToTail('Green')
list.attachToTail('Red')
list.attachToTail('Purple')
list.attachToTail('Magenta')
list.attachToTail('Cyan')
list.attachToTail('Brown')
list.attachToTail('Pink')

list.printAllElementsInReverse();
