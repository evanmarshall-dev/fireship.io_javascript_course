// ? const sum = [1, 3, 5, 7].forEach();
// ?const sum = [1, 3, 5, 7].reduce((acc, curr) => acc + curr, 0);
// Different approach to the above, but it uses a custom fxn called sum that takes a array as an argument.
function sum(arr) {
  // We need a variable to store the total.
  let total = 0;
  // Setup traditional for loop. Variable i starts at zero, the loop will iterate as long as i is less than the length of the array, and for each iteration we will increment i by 1.
  for (let i = 0; i < arr.length; i += 1) {
    // Code run for each iteration of the loop.
    console.log(arr[i]);
    // Update the total by adding the current index of the array to the total.
    total += arr[i];
  }
  return total;
}

// Now we can call the fxn with an array of integers, with a console log to see the result.
console.log('sum: ', sum([1, 3, 5, 7]));
// * Now we can run the code in terminal with node sum.js.
