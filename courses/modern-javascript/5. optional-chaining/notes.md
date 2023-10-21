# Optional?.Chaining

## Notes

One problem you will encounter in JS is when you call a property, but the object you are calling it on is **undefined**, which throws and error and can break your app.

```javascript
// In older JS the only way to deal with this was to first make a conditional check to see if the object is defined. This created awkward and ugly code.
const obj = undefined;

obj.hello;

// Conditional.
if (obj) {
  obj.hello;
}
// OR
obj && obj.hello;

// In modern JS you can use a question mark before a period to call a property on an object, which will make a return undefined WITHOUT throwing an error.
obj?.hello;

// You can also use this syntax when accessing elements on an array.
const arr = [1, 2, 3];

arr?.[0];

// An also when calling a function with arguments.
function foo(a, b) {}

foo?.(1, 2);
```
