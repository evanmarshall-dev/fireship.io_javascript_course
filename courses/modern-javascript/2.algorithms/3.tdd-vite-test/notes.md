# Test Driven Development (TDD) with Vitest

## Notes

With using TDD you can be more confident in your code and reduce the chance of bugs.

### Setting up Testing

1. Install Vitest.
2. Add scripting to package.json.
3. Also we want to add the type of module to package.json, which allows us to use ES imports in nodeJS.
4. Add main.test.js file in root of project.

Vitest will auto detect any files that end in `.test.js` and run them whenever the code changes.

### Supplemental Course Notes (from site)

Use Vitest to create a few basic unit test for the algorithims in the previous lessons.

```javasscript
  npm init -y
  npm i -D vitest
```

Update the package.json with a test script.

```javascript
  "scripts": {
    "test": "vitest"
  },
```

BASIC EXAMPLE

```javascript
import { expect, test } from 'vitest';

import { cumSum } from './sum';
test('cumulative sum of an array', () => {
  expect(cumSum([1, 3, 5, 7])).toBe(16);
  expect(cumSum([-2, -4, -8])).toBe(-14);
});
```
