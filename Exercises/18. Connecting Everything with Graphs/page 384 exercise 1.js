/*
A Common-Sense Guide to Data Structures and Algorithms, by Jay Wengrow

Page 384, Exercise 1

The first graph on page 385 powers an e-commerce store’s recommendation
engine. Each vertex represents a product available on the store’s website.
The edges connect each product to other “similar” products the site will
recommend to the user when browsing a particular item.
If the user is browsing “nails,” what other products will be recommended
to the user?


ANSWER: hammer, nail polish, needles, pins

We're interested in closely connected things to nails we would use a 
Breadth First Search algorithm which would iterate through adjacent vertices in first place.
*/

