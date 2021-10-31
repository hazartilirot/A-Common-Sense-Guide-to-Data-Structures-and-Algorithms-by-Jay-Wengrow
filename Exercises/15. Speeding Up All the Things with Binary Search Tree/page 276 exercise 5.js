/*
A Common-Sense Guide to Data Structures and Algorithms, by Jay Wengrow

Page 276, Exercise 5

There is yet another form of traversal called postorder traversal. Here is
the code as applied to our book app:

def traverse_and_print(node):
	if node is None:
		return
	traverse_and_print(node.leftChild)
	traverse_and_print(node.rightChild)
	print(node.value)

For the example tree in the text (which also appears in the previous
exercise), write out the order in which the book titles are printed with
postorder traversal.

the diagram on page 277.
*/

/*ANSWER:
Alice in Wonderland
Lord of the Flies
Great Expectations
Pride and Prejudice
The Odyssey
Robinson Crusoe
Moby Dick
*/
