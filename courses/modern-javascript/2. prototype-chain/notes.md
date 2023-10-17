# Prototype Chain

## Notes

### Object

Object is the class which everything else inherits from, such as **_arrays_** and **_functions_**. Anything that is not a _**primitive**_ (i.e. string, number, bigint, boolean, undefined, symbol, and null).

### How to Define an Object

Typically objects are defined using the _**object literal syntax**_, which contains a collection of key value pairs, which can point to other objects or functions.

```javascript
const animal = {
  dna: 123,
  // Another object.
  legs: {
    front: 2,
    back: 2
  },
  // A function.
  sleep() {
    console.log('zzz');
  }
};
```

### Prototypal Inheritance

It is not commonly used. Basically one object can inherit properties and behaviours from another object through the _**prototype chain**_. You have reached the end of the prototype chain when the value is **_null_**.

```javascript
// Pulling data from the above animal object.
const p1 = Object.getPrototypeOf(animal);
console.log(p1);
// Get prototype of the prototype and reach the end with a value of null.
const p2 = Object.getPrototypeOf(p1);
console.log(p2);
```

The above code can be run in any runtime (i.e. node.js or browser). This can be demonstrated further by creating another object called DOG and have it inherit some properties from the ANIMAL object. The dog object now has the dna property even though it is not explicitly defined on it's object. Also, if we now console.log the prototype of the dog it is now the animal.

```javascript
const dog = {
  bark() {
    console.log('woof');
  }
};
// Extend the prototype chain to make the animal a parent of the dog. This is done by using object set prototype of.
Object.setPrototypeOf(dog, animal);
// Using the dog object and dna key from the animal object.
console.log(dog.dna);
// Now print to the console: the prototype of dog to see it is now animal.
console.log(Object.getPrototypeOf(dog));
```
