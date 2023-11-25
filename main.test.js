/* eslint-disable import/no-extraneous-dependencies */

import { expect, test } from 'vitest';
import sum from './courses/modern-javascript/2.algorithms/0.cumulative-sum/sum';
import search from './courses/modern-javascript/2.algorithms/1.binary-search/bs';
import LRU from './courses/modern-javascript/2.algorithms/2.lru-cache/lru';

// With above imports we can now define our first test using the test function.
// The first argument is a string that defines the thing you are trying to test (i.e. the cumulative sum of an array).
// The second argument is a function that will run the actual code. We run the code with an expectation that the function will return a certain value.
test('cumulative sum of an array', () => {
  // Call function with array of sample data inside of expect. Then we can chain additional methods to it called matchers that expect the value to be something specific.
  expect(sum([1, 3, 5, 7])).toBe(16);

  // There are many different matchers that you can use. Here are a few examples: test if a value is defined, if a function has been called, greater than, less than... etc.
  // You can also have multiple expect statements in a single test (i.e. Making sure it works with negative numbers).
  expect(sum([-2, -4, -8])).toBe(-14);
});

// Benefits of testing are to tell use why something is not returning the expected value and instantly tell us why in the console. It also provides clear expectations.

test('binary search', () => {
  expect(search([1, 3, 5, 7], 5)).toBe(2);
  expect(search([1, 3, 5, 7], 2)).toBe(-1);
});

test('LRU cache', () => {
  const cache = new LRU(2);
  cache.putItem(1, 1);
  cache.putItem(2, 2);
  expect(cache.getItem(1)).toBe(1);
  cache.putItem(3, 3);
  expect(cache.getItem(2)).toBe(undefined);
});
