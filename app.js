/* let and const are not attached to the window object when at the global context level, but var does. */
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

console.log('--------------------------SCOPE---------------------------------');

/*Lexically this sits on the global object as it is defined on the highest level. It might be called inside of A, but
the code is still defined on the global level.
* */
function scopeB() {
    console.log('Scope B var', scopeVar);
}

function scopeA() {
    /*This function doesn't get defined on the outer environment, though, so you can't call it in the global level, because
    the execution context of the outer environment does not look inside of functions, it just sees that a function is defined
    and keeps going until the execution phase starts, in which it gets invoked. On invokation a new execution context is created
    and in that the function within is defined.
    * */
    function lexicalEnvironmentInScopeA() {
        console.log('Lexical environment in scope A', scopeVar);
        console.log('Lexical environemnt in scope A, but the outer environment chains all the way up to the global context', scopingAllTheWayUpTheChainToTheGlobalContext);
    }

    var scopeVar = 2;
    console.log('Scope A var', scopeVar)
    scopeB();
    lexicalEnvironmentInScopeA();
}

var scopeVar = 1;
var scopingAllTheWayUpTheChainToTheGlobalContext = 1337;
console.log('Scope var', scopeVar)
scopeA();

console.log('-------------------------BLOCK SCOPED----------------------------')
/* let and const are block scoped, while var isn't
* */
// console.log('Accessing all three:', blockedVar, blockedLet, blockedConst); //This line produces an error because blockedLet and blockedConst are not defined.
if (true) {
    let blockedLet = 'Some var';
    const blockedConst = 'Some other const';
    var blockedVar = 'Blocked var';
}
console.log('Accessing blocked var: ', blockedVar); // This, however, works, as var is not block scoped.
// console.log('Accessing all three:', blockedVar, blockedLet, blockedConst); //This line also produces an error because blockedLet and blockedConst are not defined.


console.log('----------------ASYNCHRONOUS----------------');
function waitThreeSeconds() {
    const ms = 3000 + new Date().getTime();
    while(new Date() < ms) {}
    console.log('Finished function');
}

function clickHandler() {
    console.log('Click event');
}

document.addEventListener('click', clickHandler);
/* The click events get queued, when clicking while this is still running
* This is because the execution stack isn't empty, so the queue isn't being processed. Once the execution stack is empty,
* then the click event listener gets notified of the queued click events and the clickHandler code gets run.
* */
waitThreeSeconds();
console.log('Finished execution')

console.log('-----------------------OBJECT FUNCTION EXAMPLE-------------------------');
function objectFunctionExample() {
    console.log('hi');
}

// Can attach a property to the method as well.
objectFunctionExample.language = 'english';

console.log(objectFunctionExample);
console.log(objectFunctionExample.language);
console.log('----------------------------END OF OBJECT FUNCTION EXAMPLE--------------------');