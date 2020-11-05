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