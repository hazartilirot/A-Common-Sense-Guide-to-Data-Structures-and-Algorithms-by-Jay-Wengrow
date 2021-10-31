/*
A Common-Sense Guide to Data Structures and Algorithms, by Jay Wengrow

Page 276, Exercise 4

In the text I demonstrated how to use inorder traversal to print a list of
all the book titles. Another way to traverse a tree is known as preorder
traversal. Here is the code for it as applied to our book app:

def traverse_and_print(node):
	if node is None:
		return
	print(node.value)
	traverse_and_print(node.leftChild)
	traverse_and_print(node.rightChild)

For the example tree in the text (the one with Moby Dick and the other
book titles), write out the order in which the book titles are printed with
preorder traversal. As a reminder, here is the example tree as shown in
the diagram on page 277.
*/

/*ANSWER: 

Moby Dick
Great Expectations
Alice in WonderLand
Lord of the Flies
Robinson Crusoe
Pride and Prejudice
The Odyssey
*/
