# Destructuring

## Notes

### Objects and Accessing Properties (Props)

There are several ways to access properties of objects. One of these methods is **_dot notation_**. This is perfectly fine, but JS offers a more concise syntax. Start by defining a variable to curly braces with the matching property name(s), and setting those equal to the object which they were defined. Sometimes you want the variable name to be different than the property name. This can be accomplished using a colon after the property name and adding the variable name after the colon. This is all called _**destructuring**_ and it can also be used on arrays. The big difference when destructuring arrays is that the _**position**_ matters. If you do not want a variable for each item in the array then leave **blank** and separate by commas.

```javascript
const dog = {
  name: 'Fido',
  age: 4,
  bark() {
    console.log('woof');
  }
};

// Reference using DOT notation.
// const name = dog.name;
// const age = dog.age;
// const { name, age } = dog;
const { name: fullName, age } = dog;

// Destructuring on arrays.
const arr = ['foo', 'bar', 'baz'];
// Below we set each position in the array with a unique variable name (i.e. a, b and c).
const [a, b, c] = arr;
// OR.
const [, , c] = arr;
// If you do not want to have each position in the array as a variable you can leave position blank and separate by commas or if you are only using one position you can do as below.
const c = arr[2];
```
