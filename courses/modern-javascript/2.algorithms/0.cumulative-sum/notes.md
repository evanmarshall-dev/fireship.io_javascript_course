# Cumulative Sum

## Notes

### Problems You Might Face on a Tech Interview

Q. Create a function that takes an array of numbers and returns a number that is the **_sum_** of all values in the array (cumulative sum).

A. To get the sum of an array we will have to loop over each element and store a running total in some other variable. You could use `forEach()`, but there is a better solution in `reduce()`. Reduce method takes the array and reduces it to a single value and in our case we will reducing it to the **sum**. Reduce takes two values, which are the _**accumulated**_ value and the _**current**_ value in the loop. As we loop over the array we want to add the current value to the accumulated value and by the time it gets to the end that will give us the total sum. Lastly, we use a _**zero**_ as the second argument for the starting value of zero.

Bonus. Perform the above tasks, but you cannot use the new JS methods.
