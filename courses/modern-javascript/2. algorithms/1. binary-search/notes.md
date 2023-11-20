# Binary Search

## Notes

### Problems You Might Face on a Tech Interview

Q. Create a function that takes a sorted array and a target value. Return the index of the target value in the array. If the target value is not in the array, return -1.

A. You could simply loop over the array until you get the target value, but this isn't efficient especially for large arrays.

Thinking of algorithm complexity the above method would be **_O(N) Time Complexity_** (O of N). This means the worst amount of time it will take is equal to the elements in the array.

A. Binary Search offers a more efficient approach.

Analogous to looking for something with "J" in the dictionary. You would not start at the beginning and read through until you got there. You would open in the middle and if you over-shoot you would go back to J. And vise versa for if you under-shoot.
