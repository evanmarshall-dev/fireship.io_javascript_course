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

OOP has a `class` keyword, however classes are simply syntactic sugar for prototype inheritance and objects. A class can define a _**constructor**_ which is a function which is called when the object is first created. It can also have properties and optionally create _**getters**_ and _**setters**_ to access the properties. It better encapsulates functions by organizing them as methods on an object _**instance method**_ or make them global to the class name with the _**static method**_.

### Built in JS Data Structures

- _**Array, Set and Map**_: Array holds a dynamic collection of indexed items. A set is a collection of unique items. A map also holds key:value pairs like an object, but can be more easily looped over plus many other features. JS is a _**Garbage Collection**_ which means JS will automatically de-allocate objects from memory when they are no longer referenced in the code. However, when you have a map all of the properties will ALWAYS be referenced. If that is a problem there is a _**WeakMap**_ and _**WeakSet**_ which contain properties which can be garbage collected to limit memory usage.

### Non-Blocking Event Loop (An interesting feature)

Normally when you run scripts it is run _**synchronously**_ or line-by-line and the next line cannot start until the previous line finishes. With an _**event loop**_ we can write _**asynchronous**_ (async) JS which runs in a separate THREAD POOL, while the rest of the application continues to execute. This is important because web apps tend to have multiple things going at the same time, but they only have access to a SINGLE thread for computing called the _**main thread**_. Without async code it would be impossible to multi-task. This can be demonstrated in the code with setTimeout(). This function allows us to delay running code for a specified amount of time. It is called a **_callback function_**. Callback functions get enqueued in the event loop until it is called back later to be executed in the main thread. Callbacks are great, but when they become too complex and several levels nested it can create **_callback hell_**.

A `Promise` allows us to write more efficient async code. A promise is a wrapper for a value which is unknown now, but that will _**resolve**_ to a value in the future. For example giving a call to a 3rd party API that resolves to some data. The second part of a promise is the _**reject**_ which generates an error if something goes wrong. The consumer of the promise can use methods such as _**then/catch**_ to handle these two possible outcomes. A BETTER option is to define an async function that will automatically return a promise. In the body of the function we can pause its execution using the `await` keyword. In order to handle errors with async/await functions you need to wrap it in a _**try/catch**_ block.

### ES Modules

As you code grows in complexity, you will not be able to maintain it in one file. **_ES MODULES_** allows you to share code between files. By default, all of the code in a file is private to said file however if there is code we want to use elsewhere we can use a `default export`. This allows us to use an import statement in another file to use the code in that file, too. You can also export several pieces of code (i.e. functions) from one file and import them by name in another. This is called _**named exports**_.

### Package Managers

A lot of times you will use code written by another developer. This is done by using a package manager. The largest development package manager is _**Node Package Manager**_ (npm). Any packages installed from npm puts it's code into the _**node_modules**_ folder of your project and also provides a _**package.json**_ that will list out all of your dependencies in your project.

### Document Object Model (DOM)

On the web code will run in the browser, which is based on the DOM where the UI is represented as a tree of HTML elements or _**nodes**_. The browser provides an API to interact with these nodes with the most important object being the `document`. The document allows us to grab an individual HTML element using the method called _**query selector**_. The query selector takes a CSS selector as an argument and it will find the HTML element which has the same class name, id or tag name. It returns an instance of the _**element**_ class, which itself has a variety of properties and methods which will get you info about it or change it's behaviour. You can grab multiple elements using `querySelectorAll`. We can also _**listen**_ to events that happen to it, such as a button click. Much of web dev revolves around listening to events and updating the UI accordingly.

### Frameworks

One common _**dislike**_ amongst developers and vanilla JS is that it results in _**imperative**_ code. This is when the UI is mutated directly. This is why most developers use frontend frameworks (i.e. svelte, vue, angular, react, etc.), which results in _**declarative**_ code where the UI is a function of it's inputted data. These frameworks/libraries combine JS, HTML and CSS into _**components**_, which can be used together to form a component tree to represent the UI. Within the components data is _**reactive**_, meaning it can be bound fro JS directly to the HTML (DATA BINDING). This allows for the UI to be updated automatically each time the data changes.

### Module Bundler

Once you complete a JS app, you will have to take all of the JS files and combine them into a single bundle that can be used by the browser. This is done by using a tool called a module bundler (i.e. vite or webpack). Sometimes this JS file can get too big and negatively impact performance. This can be measured by the _**network**_ waterfall in the browser dev tools. One way to mitigate this is to split the JS bundle into multiple files and then use _**dynamic imports**_ in your code to import the JS when it is needed.

### Server Side JS

JS not only runs on the browser, but also the server. Node.js is the most popular _**runtime**_ and you can run JS code anytime using the `node` command. This opens the doors to frameworks such as _**electron**_ which combne node.js with the browser (cross-platform) to create full-stack _**desktop**_ apps with JS or iOS and Android apps with _**react native**_.

### JS Tools

Using tools such as _**TypeScript**_ or _**ESLint**_ which do static analysis to improve your code quality.
