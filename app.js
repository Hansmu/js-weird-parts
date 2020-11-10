/* let and var are not attached to the window object when at the global context level, but var does. */
let letVariable = 'I am changable, but not attached to the window.';
const constVariable = 'I am constant, but not attached to the window.';
var firstGlobalVariable = 'I am a variable and I am on the window';

/* undefined
* In Javascript `undefined` is a special value. It does not mean that the variable is actually undefined, it means that the
* variable has been initialized with the special `undefined` value. If you don't declare a variable at all, then you get the
* "variable is undefined" error. The memory space is not accessible if you don't have a variable. Not setting undefined
* yourself is a good idea, as then you can track whether or not the code has actually set the variable or not. Then undefined
* would actually mean that the variable has not been touched.
* */

// With most languages you'd get an error when calling a function before it's been declared.
firstGlobalFunction();
// This works for var, but not for let and const. If you don't declare the variable, then you get an error that it's undeclared.
// However, if you declare it, then you get undefined when using var. Let and const aren't initialized to undefined.
console.log(variableDeclaredAfterItIsCalled);

/*
* The above behavior happens because Javascript code is executed in two phases.
*   1) The creation phase.
*   The global object, this and outer environment are created there. It goes through the code and
*   sets up the memory space for variables and functions. This is called "hoisting". Code isn't physically moved, just the space
*   is set aside. The function in its entirety is placed in the memory space, that's why they're not undefined before they're called.
*   With variables the compiler doesn't know what the variable will be yet. It gives it a placeholder called undefined and an actual
*   value is set when the code is actually executed.
*
*   2) Execution phase.
*   Runs the code line by line again from the start, but this time assigning variables values and processing functions.
* */

function firstGlobalFunction() {
    console.log('Called the global function');
}

var variableDeclaredAfterItIsCalled = 'some variable';