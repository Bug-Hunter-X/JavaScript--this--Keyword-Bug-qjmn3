# JavaScript 'this' Keyword Bug

This repository demonstrates a common JavaScript bug related to the unexpected behavior of the `this` keyword.

## Description
The `this` keyword in JavaScript can be confusing, as its value depends on the context in which the function is called. In some cases, it might unexpectedly refer to the global object (window in browsers, undefined in strict mode), leading to unexpected behavior.

## Bug
The `bug.js` file contains a function that logs the value of `this`. Calling this function directly or through an object method can lead to different `this` values, potentially causing errors.

## Solution
The `bugSolution.js` file provides a solution using the `bind()` method to explicitly set the value of `this` within the function, preventing the unexpected behavior.

## How to reproduce
1. Clone this repository.
2. Open `bug.js` and run the code in a JavaScript environment (e.g., Node.js, browser's console).
3. Observe the different values of `this` in each scenario.
4. Open `bugSolution.js` to see how the `bind()` method can fix this issue.
