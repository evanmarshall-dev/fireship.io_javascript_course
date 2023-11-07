# Spread

## Notes

Creating an object in JS is easy when using the **_literal syntax_**. What happens when you want to combine two objects or two arrays together?

With _**spread**_ we start with an object literal then use three dots in front of the objects we want to merge into it. This creates a **new** object with the old objects merged together.

```javascript
// Two object literals. Pretend they come from an API call. Two different objects however they share the property "third". We want to combine them into a new object called "full".
const obj1 = {
  first: 'a',
  second: 'b',
  third: 'c'
};

const obj2 = {
  // Other way to use spread. POSITION matters. If it is at the top, anything that comes after overwrites obj1. If it is at the bottom then it takes priority.
  ...obj1,
  third: 'd',
  fourth: 'e'
};

// One way to achieve object combination is the .assign method. The last argument takes the highest priority (therefore the "third" property is "d").
// ? const full = Object.assign({}, obj1, obj2);

// A more concise way to run the above is using the "spread" operator.
// See above's second object to see another way to write this.
const full = { ...obj1, ...obj2 };
```

### Supplemental Course Notes (from site)

The spread syntax `...` is a relatively new operator that was introduced in ES2018. It provides a concise way to combine objects and arrays.

```javascript
const obj = {
    foo: 1,
    bar: 2,
    baz: 3
};
const newObj = {
    foo: 4
    ...obj,
};
console.log(newObj); // { foo: 1, bar: 2, baz: 3 }
```

It’s also useful for combining arrays.

```javascript
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const arr3 = [...arr1, ...arr2];
```
