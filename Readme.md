**Syntax parser** - a program that reads your code
and determines what it does and if its grammar is valid.

**Lexical environment** - where something sits physically
in the code you write. A variable inside of a function
sits physically inside of the function. Lexically 
inside that function. Where it's written and what
surrounds it.

**Execution context** - a wrapper to help manage the
code that is running. There are lots of lexical
environments. Which one is currently running is managed
via execution contexts. It can contain things beyond
what you've written in your code.

**Name/value pair** - a name which maps to a unique
value. The name may be defined more than once, but
can only have one value in any given context.
That value may be assigned to more names.

**Object** - a collection of name value pairs.

Every time code is executed, it is inside of an
execution context. It can be inside multiple
contexts. The base execution context is
the global execution context. It is accessible
to everything everywhere in your code. It creates
a global object and the special keyword `this`.
The window object is the global object inside of
browsers. If you're running NodeJS, then the global
object will be different, but can still be referenced
using `this`. There is always a global object. 
Each tab has its own execution context, so the global
object isn't shared between them. At the global
level the global object is the same as this.
Global means something that is not inside a function.

There is a thing such as the outer environment,
however, for the global context that is null, 
because you're as outside as you can be.

**Single threaded** - JS is single threaded from the point of view of programmers.
It might not be executing with a single thread under the hood of the browser, though.

**Synchronous** - one at a time and in order.

Javascript is single-threaded and synchronous in its behavior.

Calling a function creates a new entry in the execution stack, it goes to the top.
The new stack entry will have its own variables and whatnot. It goes through the same
create and execute phases, but inside of that function. If we have another function,
then it'll stop, go into that and start another execution context. Every function
creates a new execution phase. Once the function execution ends, then the context
is popped off the stack.

![diagram](execution-stack.JPG)

**Variable environment** - where the variables live and how they related to each other
in memory. Each execution context gets its own variable environment.

![diagram](variable-env.JPG)

Every execution context has a reference to its outer environment. The outer environment
depends on where the function sits lexically. When a function cannot find a variable
inside of its variable environment, then it turns to the outer environment. The
execution context depends on where the function is called, but the outer environment
looks at where the code was written. The outer environment search is a chained operation.
It keeps going through the outer environments, trying to find a declared variable.
So if you have functions defined inside of functions, then it chains all the way up
trying to find the variable definition.

**Scope** - where a variable is available in your code and if it's truly the same variable
or a new copy.

When the functions are declared on the same global level, then the scope chain looks 
like this.

![diagram](global-scope-chain.JPG)

However, when the functions are defined within each other. That is, the definition of
b is written inside of a, then the outer environment reference for b becomes a.

![diagram](nested-scope-chain.JPG)

**Asnychronous** - more than one at a time.

While Javascript is synchronous, then it's running in an asynchronous environment, which
is the browser. JS has hooks to talk to the rendering engine, to send HTTP Requests etc.
There is such a thing as the event queue. The Javascript engine looks at the event queue
when the execution stack is empty. If there's something there, then the JS engine looks
if any particular function is listening to the event and if it should be run.
**Event queue isn't accessed unless the execution stack is empty**. So the JS code 
is still synchronous, it simply handles asynchronous actions in a synchronous manner.
Any events that happen outside of the engine gets placed in the event queue, and if the
execution stack is empty, then it processes those events. It'll process those events
in the order they appeared in. So if the click event's first and then the HTTP request
event, then the click event gets handled first and then the HTTP request.
![diagram](event-queue.png)

**Dynamic typing** - you don't tell the engine what type of data a variable holds,
it figures it out while your code is running. Variables can hold different types of
values because it's all figured out during execution.

**Primitive type** - a type of data that represents a single value. That is, not an object.
* Undefined - represents lack of existence (you shouldn't set a variable to this)
* Null - represents lack of existence (you can set a variable to this)
* Boolean - true or false
* Number - floating point number (there's always some decimals). JS has only one 'number' type.
* String - a sequence of characters.
* Symbol - Used in ES6.

**Operator** - a special function that is syntactically (written) differently. 
Generally, operators take two parameters and return one result.

`3 + 4` - infix notation

`3 4+` - postfix notation

`+3 4` - prefix notation

**Operator associativity** - what order operator functions get called in, either
left-to-right or right-to-left, that is, when functions have the same precedence.

**Coercion** - converting a value from one type to another. Happens quite often in JS
as it's dynamically typed. Operators try to apply coercion to be able to do the 
operation. Ex. 3 < 2 < 1. First 3 < 2 gets evaluated, coming to false with the next
part being false < 1. Then it tries to coerce the false value to a number, which is 0.
So 0 < 1. Different operators coerce values differently.

An if block in Javascript does type coercion, that's why numbers can be used in there
and such.

**Namespace** - a container for variables and functions. Typically to keep variables and 
functions with the same name separate. They don't exist in JS. Can use an object
wrapper in JS to do the same thing.

**First class functions** - everything you can do with other types you can do with 
functions. Assign them to variables, pass them around, create them on the fly.
**Function is a special type of object**. It has two hidden properties. Name, which
is optional, as the function can be anonymous. Code, which is invocable with "()".
Meaning run this code. Additionally, you can attach whatever type of variables you 
want to greet, same as you would with an object literal.

**Expression** - a unit of code that results in a value. It doesn't have to save
to a variable. A **statement**, however, does not return, just does work. Ex an 
`if` or a function declaration, which is named. An anonymous function is an expression
as it returns the function declaration.

Primitive values are passed by value, that means that a copy of the variable is
created when a variable refers to it. Objects are by reference, that means that
each variable gets a reference to the variable, instead of getting a copy.

When an execution context is created for a function, then in addition to the
variable environment, this, outer environment, the function also gets an 
arguments property. The arguments variables refers the the arguments that have
been given to the function.

Semicolons are optional in Javascript. A new-line character is entered at the
end of a line. The parser looks at it and decides whether or not you are allowed
to start a new line from that. If you aren't allowed to go to the next line with
a particular syntax, then it goes ahead and inserts a semicolon at the end of that line.
For example: `return` gets a semicolon if you enter a new line after writing it.

**Immediately invoked function expression (IIFE)** - creating a function and then
calling it where you created it. `function(name) {console.log('Hello ' + name);}()`
This is useful with frameworks, as you'd make sure that your code doesn't accidentally
set your variables on the global object, thus avoiding accidental collisions.

**Closure** - a surrounding function returns a function. When it's executed, then
its execution context is created. Within that execution context memory space is 
given for variables and such. The function finishes and the context is popped
off the stack. Its variables stay there until garbage collection gets them.
However, the inner variable still has a reference to the parameters. Goes up
the chain if it cannot find the variable declared on itself. So garbage collection
does not clean the variables of the parent as a reference is still there for it.
![diagram](closure.JPG)

The context of the buildFunctions is popped off the stack, but the variables remain 
in memory. The i has iterated to 3, so when the functions get called, they get
called with 3, as that is the variable's value in memory. As there is no variable
i in the function's scope chain, then it goes up the scope chain, where it sees the
loop variable i that's been set to 3. When you invoke the function, then it'll
say what's in the memory **right now**, not when it was created. However, this is
only a problem in the case of var, as let and const are block scoped, so they'll
each reference their own specific variable.
![diagram](closure_2.JPG)

**bind** - it's a method on the function object, with which you can define what
the `this` variable refers to inside of the function. Additionally, can be used
to bind certain input values to be constant.

**call** - a method on the function object, can be used to call the method 
similar to just `()`. However, you can define the `this` object when using call.
Additionally, the second parameter is the parameters.

**apply** - does the same thing as call, expect the second parameter has to be
an array. This can be useful when you're using mathematically calculated parameters
or other things like that. Can be used for function borrowing from another object.

When you try to access a property on an object in JS, then it first looks for it
on the object itself, if it cannot find it, then it goes into the prototype.
A prototype exists on all objects, it's under the proto property, which is 
a separate object that the original object has a reference to. A proto object
points to another prototype. Each object can have its own prototype. Another
object can also point to the same proto as the first object. You should never
access the prototype property directly. It's under the `__proto__` property.
`this` instead of a proto object refers to the original object.
![diagram](prototype_chain.JPG)

Everything in JS is either an object or a primitive. They all have a prototype,
even primitives, except for the base object. All objects extend the base object. The function
prototype is the default function object, but that also extends the default
object. Same thing with arrays. An array extends the array default object, which
extends the base object. Also the same thing with primitives. A primitive has
its specific object, e.g. number, which also extends the base object.

`for ... in` should never be used with arrays, even though it works. That's
because arrays are objects and each array element is a named entry in the 
array. However, if some common functionality gets added to the array prototype
by a library, then iterating over it using `for ... in` will also pick up
that property.

`Object.create` can be used to extend an object. It creates a new object
using an existing object as its base, so setting the __proto__ property.
You can then overwrite the defaults as needed.

`use strict` makes JS use additional rules to make sure you're using JS
in a stricter, more correct way. It is implemented differently in different
JS engines, so it might not be the best thing to rely on, but it can be
useful.