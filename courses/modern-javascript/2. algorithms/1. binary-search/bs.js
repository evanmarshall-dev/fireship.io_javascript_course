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
export default function search(arr, target, start = 0, end = arr.length - 1) {
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
  // ? if (arr[middle] > target) {
  // ? }
  // 3. The middle index can be less than the target.
  // ? if (arr[middle] < target) {
  // ? }
}
