/* let and var are not attached to the window object when at the global context level, but var does. */
let letVariable = 'I am changable, but not attached to the window.';
const constVariable = 'I am constant, but not attached to the window.';
var firstGlobalVariable = 'I am a variable and I am on the window';

// With most languages you'd get an error when calling a function before it's been declared.
firstGlobalFunction();
// This works for var, but not for let and const. If you don't declare the variable, then you get an error that it's undeclared.
// However, if you declare it, then you get undefined when using var.
console.log(variableDeclaredAfterItIsCalled);

/*
* The above behavior happens because Javascript code is executed in two phases.
* 1) The creation phase. The global object, this and other environment are present there. It goes through the code and
* sets up the memory space for variables and functions. This is called "hoisting". Code isn't physically moved, just the space
* is set aside. The function in its entirety is placed in the memory space, that's why they're not undefined before they're called.
* With variables the compiler doesn't know what the variable will be yet. It gives it a placeholder called undefined and an actual
* value is set when the code is actually executed.
* */

function firstGlobalFunction() {
    console.log('Called the global function');
}

var variableDeclaredAfterItIsCalled = 'some variable';