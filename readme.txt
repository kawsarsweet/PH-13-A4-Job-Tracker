1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

getElementById → one element by id

getElementsByClassName → many elements by class

querySelector → first match

querySelectorAll → all matches

2. How do you create and insert a new element into the DOM?

First, we create an element using document.createElement().
Then we add content or classes to it.
Finally, we insert it into the page using methods like appendChild() or append().

3. What is Event Bubbling? And how does it work?

Event bubbling means when an event happens on a child element, the event does not stop there.
It moves upward step by step to its parent elements.


4. What is Event Delegation in JavaScript? Why is it useful?

Event delegation means adding one event listener to a parent element instead of adding listeners to many child elements.

Because of event bubbling, the parent can detect which child was clicked.

It is useful because:

 a. Improves performance

 b.Less code

 c. Works even for dynamically added elements

 d. This is very helpful when many items are created using JavaScript.



5. What is the difference between preventDefault() and stopPropagation() methods?

preventDefault → stops default browser action

stopPropagation → stops event bubbling





