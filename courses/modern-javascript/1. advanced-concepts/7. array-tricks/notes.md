# Array Tricks

## Notes

### Ways to Create and Manipulate an Array

The **_Literal_** Syntax.

```javascript
// Literal syntax.
const arr = [1, 2, 3, 3, 3, 4, 5];
```

What if you wanted to create an array with 100 or more zeroes?
A good approach is to use an _**Array Class**_ to initialize the array with 100 values and use the _**fill method**_ to fill the array with whatever default value(s) you want to use.

```javascript
// Array Class.
const arr2 = Array(100).fill(0);
```

Often you will want an array that counts from zero to one hundred (a range). This can be done by adding the _**map fxn**_ after the creation of the array.

```javascript
const arr3 = Array(100)
  .fill(0)
  .map((_, i) => i + 1);
```

#### Map Function

One of the most important array fxns. It works by creating a fxn for each element in the array then the return value from that fxn is used to replace that value. Above the map fxn is taking the index of each item then adding one to it. The ending result is an array that counts from 0 to 99.

#### Using Spread syntax

The above can also be written using the _**spread**_ syntax. We use it on the array of 100 elements and instead of using a fxn we can call the **_keys method_**. The keys method turn the entire index of the array (index goes from 0 to n). Keys cannot be used directly because it calls an array **iterator** which is kind of like an array which is like an array that you can loop over, but it does not provide all of the values directly. Therefore you can use the spread syntax to convert an iterator to an array if you want all of the values like the below code (arr4).

```javascript
const arr4 = [...Array(100).keys()];
```

Using spread you can also get all of the unique items from an array. This utilizes the _**Set**_ object. Set can be used directly or if you want to convert it back to an array then wrap it in the spread syntax.

```javascript
// Start with using a SET object, which is also like an array, but only holds unique values.
const unique = new Set(arr);

// OR convert back to an array.

const unique = [...new Set(arr)];
```

#### Looping Over an Array

One of the most common things to do with an array is to loop over them. The easiest way to do this is with a _**for of**_ loop. It loops over every value and executes the code inside the curly braces.

You can use a for-in loop, but not recommended because it iterates over property names in an un-specified order leading to unpredictable results.

Better approach is to loop over the array **entries**. Each entry is an array itself, which contains the index and value (i, val). This allows for _**destructuring**_ in the loop to provide us with both the index and value for each iteration.

The code we are writing is _**imperative**_, which means we have a for statement that does something in the application. However, JS is multi paradigm, which allows us to also write _**declarative**_ functional code. For example, the array object has a bunch of built-in methods (i.e. .forEach, .map or .findIndex()).

One of the methods creates an easy loop. The `forEach();` takes a callback function as an argument and this fxn provides you with both the value and index for each iteration of the loop.

the `map();` method converts the values of an array into a different value, `filter();` to remove unwanted values, `find();` to find a specific value/index, and `reduce();` to take an entire array and calculate a single value from it.

```javascript
for (const val of arr) {
  // In some cases you will need the index of the element (val), which is not available by default.
  console.log(val);
}

// Loop over array entries.
for (const [i, val] of arr.entries()) {
  console.log(i, val);
}

// Declarative functional code.
arr.forEach();
arr.map();
arr.filter();
arr.find();
arr.findIndex();
arr.reduce();
```

### Supplemental Course Notes (from site)

Create a range of numbers.

```javascript
const range = Array(100)
  .fill(0)
  .map((_, i) => i + 1);

// OR

const range = [...Array(100).keys()];
```

Remove duplicates from an array.

```javascript
const unique = [...new Set(arr)];
```

Get a random element.

```javascript
const random = arr[Math.floor(Math.random() * arr.length)];
```

Loop over a key-value pair.

```javascript
for (const [i, val] of arr.entries()) {
  console.log(i, val);
}
```
