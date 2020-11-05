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