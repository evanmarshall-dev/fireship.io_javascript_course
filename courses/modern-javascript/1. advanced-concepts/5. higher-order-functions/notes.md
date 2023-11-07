# Higher Order Functions (HOF)

## Notes

Most important part of JS to understand is the **_function_**. It is a multi-paradigm language that supports functional programming and patterns.

Functions are **objects**, which means they can be used as variables and passed around to other functions.

### How to Define a Function

When you start with a function keyword you are defining a **_function declaration_** or **_statement_**. The interesting thing for a statement is that it will always be _**hoisted**_ up to the top of the file, which means it can be used or referenced anywhere in the file.

```javascript
// Function declaration or statement.
function sayHi(message) {
  return 'Said...' + message;
}
```

The other option is a _**function expression**_, which is setting a function equal to a variable. The function is not created until it is encountered in the code. This means that any code defined above it cannot reference the function. Expressions can also be _**anonymous**_, which allows you to use them are arguments to functions without giving them a name.

```javascript
// Function expression.
const sayHi = function (message) {
  return 'Said...' + message;
};

// Anonymous function.
const anon = arr.map(function (val) {
  return val * 2;
});
```

A rule of thumb for usage is:

- DECLARATIONS for Global Scope.
- EXPRESSIONS for Local Scope.

### Now Onto HOF

A higher order function is either a function that takes a function as an **argument** or **returns** a function. A common practice is to take a callback as an argument to the function then pass the function expression as the argument to the function. Most times it is not necessary to name the function that is going in as the argument (anonymous functions or arrow functions are used).

```javascript
// Higher order function. This function takes a callback as an argument.
function funWrapper(callback) {
  callback('Called by wrapper');
}

// Often in Js you will deal with callbacks. We then call the callback with whatever arguments we want. Then we can take the function expression and pass as an argument to that function.
funWrapper(sayHi);
// With an arrow function we can define the function logic directly inside the parenthesis.
funWrapper((m) => console.log(m));
```

The other type of HOF to be aware of is a function that returns a function.

```javascript
// Function body returns a new function.
function funCreator() {
  return function (message) {
    return 'Said...' + message;
  };
}

// This means that when we call it we get a function value back. Now we can use it elsewhere in the application (app).
const fn = creator();
fn('hello!');
```

### Supplemental Course Notes (from site)

A higher order function is a function that takes a function as an argument, or returns a function. They are commonly used in functional programming, and are a powerful tool for abstracting away complexity.

```javascript
// A function that takes a function as an argument
function add(x, y) {
  return x + y;
}
function subtract(x, y) {
  return x - y;
}
function math(x, y, operator) {
  return operator(x, y);
}

math(5, 2, add); // 7
```
