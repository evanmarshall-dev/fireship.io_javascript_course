/* eslint-disable consistent-return */

// One way to get an index of an item in a sorted array is to simply loop through the array until you find the item or target with the matching value.
// Problem with this method is that it is not very efficient especially if the array is very large.
// ? const arr = ['a', 'b', 'c', 'x', 'y', 'z'];

// ?export default function search(arr, target) {
//   ?for (let i = 0; i < arr.length; i += 1) {
//     ?if (arr[i] === target) return i;
//   ?}
// ?}

// Binary Search.
// Default values set for start and end parameters so that we start at index 0 and end at the last index of the array.
function search(arr, target, start = 0, end = arr.length - 1) {
  console.log(start, end);

  // Conditional for if start is greater than end then the value has not been found. It means it searched through the entire array and did not find the value.
  if (start > end) {
    console.log('value not found');
    // If value not found return -1.
    return -1;
  }

  // Most important part of this algorithm is to find the middle of the array.
  // We do this by adding the start and end and dividing by 2. We also use Math.floor to round down to the nearest whole number.
  const middle = Math.floor((start + end) / 2);

  // Three things can now happen and we will setup conditionals for each.
  // 1. The middle index can equal the target. If this is true then we have found the value and we can return the index.
  if (arr[middle] === target) {
    console.log(`${target} found at index ${middle}`);
    return middle;
  }
  // 2. The middle index can be greater than the target.
  // Make this recursive by calling the search function again and passing in the new start and end values.
  // Middle-1 is the element adjacent to the current middle value, which has the effect of slicing the search area in half.
  if (arr[middle] > target) {
    return search(arr, target, start, middle - 1);
  }
  // 3. The middle index can be less than the target.
  // Also search via recursive function call but this time we pass in the middle + 1 as the new start value.
  // Middle+1 also slices array in half, but on the right side.
  if (arr[middle] < target) {
    return search(arr, target, middle + 1, end);
  }
}

const arr = ['a', 'b', 'c', 'x', 'y', 'z'];
console.log(search(arr, 'b'));

// Create an array with some strings then call the function to inspect it. Do this using node by typing in the console node bs.js.
