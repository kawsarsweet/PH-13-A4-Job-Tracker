1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

getElementById is used when we want to select one specific element using its unique id. It always returns a single element.

getElementsByClassName selects elements using a class name. It returns multiple elements as a live collection, so changes in the DOM can automatically update the list.

querySelector works using CSS selectors and returns only the first matching element.
querySelectorAll also uses CSS selectors but returns all matching elements as a static list.

In short:

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

For example, if we click a button inside a div:

First the button event runs

Then the div event runs

Then the body event runs

So the event “bubbles” from inside to outside.



4. What is Event Delegation in JavaScript? Why is it useful?

Event delegation means adding one event listener to a parent element instead of adding listeners to many child elements.

Because of event bubbling, the parent can detect which child was clicked.

It is useful because:

Improves performance

Less code

Works even for dynamically added elements

This is very helpful when many items are created using JavaScript.



5. What is the difference between preventDefault() and stopPropagation() methods?

preventDefault() stops the browser’s default behavior.
Example: stopping a form from reloading the page after submit.

stopPropagation() stops the event from moving upward to parent elements during bubbling.

So:

preventDefault → stops default browser action

stopPropagation → stops event bubbling




