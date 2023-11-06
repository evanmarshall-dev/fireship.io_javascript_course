# Closures

## Notes

### Closures in 100 Seconds

Closures are functions that can access values outside of their own curly braces. In order to call a function the JS interpreter needs to know about the function itself and any other data from the surrounding environment that it depends on. Everything needs to be closed up inside a "box" (closure) before it can be fed to the "machine" (JS V8 Engine).

```javascript
// Pure function which does not depend on external data.
// It is a fully self-contained CLOSED expression (not a closure).

function pureFun(a, b) {
  return a + b;
}

// A function that references data outside of it's own scope (i.e. global environment or external function). This IS a closure.
let b = 3;
function impureFun(a) {
  return a + b;
}
```

When a **_pure_** function (fxn) is called it gets pushed onto the call stack, where it is executed and it's internal data is only kept in memory until it is popped back off the call stack.

In order for the interpreter to call the impure fxn and know the variable values it creates a **_CLOSURE_** to store them in a place of memory (**HEAP** memory) where it can be accessed later.

Unlike the call stack (short term) the heap memory can store data indefinitely and then decide when to get rid of it later with the **_GARBAGE COLLECTOR_**.

Closures require more memory than pure functions. Practical reasons to use them is **_DATA ENCAPSULATION_**.

### Further Explanations

A closure is basically a fxn that closes over a state or data so that it can be used elsewhere in the application.

```javascript
// When JS sees a fxn that references a value in it's parent scope (outer fxn scope) it creates a closure to save that value in memory so that it can be accessed later.
function outer() {
  let x = 1;
  function inner() {
    x = x + 1;
  }
  // You can also make this a higher order fxn by returning the inner fxn from the outer fxn, that allows us to operate on data inside of this fxn in any other part of the application (Also known as encapsulating data).
  return inner;
}

const incrementX = outer();
incrementX(); // x = 2
incrementX(); // x = 3
```
