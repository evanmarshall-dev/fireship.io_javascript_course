# JavaScript Crash Course

## Notes

### Implementation Standard

The implementation standard for JavaScript (JS) is called **_ECMAScript_**. ECMAScript is the default language of all web browsers. Aside from Web Assembly, JS is the only language which runs natively in a browser.

### Runtime

The browser is not the only JS runtime. You can also run JS on servers (using tools like nodeJS). JS is a scripting language, which means you can run code on the fly, in the browser by using the developer console. It is interpreted line-by-line. This process is made faster by a JS engine called _**V8**_. V8 takes the code, converts it to machine code through a process called _**just-in-time**_ compilation (JIT).

### Defining Variables

Var, Let and Const are the three ways to define a JS variable, with _**LET**_ being the most common. Let is usually used when the variable value can change, whereas const is generally used when the variable value stays the same.

### Data Types

**_Primitive_** data types include: number, string, bigint, boolean, undefined, symbol, and null. When you leave a variable without a value it automatically gets assigned the primitive value of **_undefined_**, which can be assigned later. You can explicitly assign an empty value using **_NULL_** or assign it a string.

Any value that is not a primitive will inherit from the _**OBJECT**_ class.

### Lexical Environment

The reason we have so many types of defining variables is due to the lexical environment. This determines where variables work and where they do not. There is _**global**_ SCOPE (the variable works everywhere) and there is _**local**_ scope (i.e. variable defined within a function is only available to that function). If you have a statement, like an IF statement, then variables can be scoped within the braces or called _**block**_ scope. NOT commonly used, but if you use VAR within the block scope it will not be block scoped and instead _**HOISTED**_ up to the LOCAL scope (DO NOT USE).

### Functions

When the function keyword is used by itself it is called a _**function definition**_ or statement. These work by taking in an input or parameters and returning a value which can be used somewhere else. Functions are simply OBJECTS, which means they can be used as _**expressions**_. This allows them to be assigned as variables or to allow us to construct _**higher order functions**_. Higher order functions use functions as an argument OR a return value. Functions can also be _**nested**_ to create a closure that encapsulates data and logic from the rest of the program. Normally, when you call a function which has a primitive value, it is stored on the _**call stack**_ (browser's short term memory). However, when you create a CLOSURE, the inner function can still access variables in the outer function even after the initial function call. This happens, because JS automatically stores the data in the outer function in the _**heap**_ memory, which persists between function calls (this is rarely thought about in web dev).

- _**THIS**_ Keyword: Represents an object based on how a function is called. When called from the GLOBAL scope, it represents the WINDOW object. If the same function is attached to an object then THIS will be a reference to that object. You can then manually _**BIND**_ that function to some other object using the bind method.
- _**Arrow**_ Functions: Is another way to define functions. Arrow functions do not have their own THIS value and are always _**anonymous**_, which makes them ideal for function expressions.
- When passing arguments, a primitive (i.e. number) is passed by _**value**_, which means a copy is created of the original variable HOWEVER if the argument is an object then it is stored in the HEAP and passed by _**reference**_.

### Objects

The easiest way to define an object is with an _**object literal**_. You can do this using curly braces or an object type created with a constructor using the new keyword. An object contains a collection of _**key:value**_ pairs or properties and values. Objects can inherit propertied from each other thanks to a mechanism called the _**prototype chain**_. Every object has a private property that links to exactly one prototype. This differs from CLASS Based inheritance (found in other languages), because we are dealing with REAL objects that take up memory as opposed to abstract classes in the code.

### Object Oriented Programming (OOP)

OOP has a _**class**_ keyword, however classes are simply syntactic sugar for protypal inheritance and objects. A class can define a _**constructor**_ which is a function which is called when the object is first created. It can also have properties and optionally create _**getters**_ and _**setters**_ to access the properties.
