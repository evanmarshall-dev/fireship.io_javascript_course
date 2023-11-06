# Nullish Coalescing

## Notes

### Truthy / Falsy

If you have an **_if statement_** with truth in parenthesis it will always run the code, but if you switch it to false then it will never run the code. This is because true is truthy and false is falsy.

### Type Coercion

JS is a weakly typed language that uses type coercion to determine whether a value should behave as true or false at runtime. The following values would be considered truthy:

```javascript
if (true)
if ({})
if ([])
if (42)
if ("0")
if ("false")
if (new Date())
if (-42)
if (12n)
if (3.14)
if (-3.14)
if (Infinity)
if (-Infinity)
```

The following are falsy:

```javascript
if (false)
if (null)
if (undefined)
// In most other languages 0 would be truthy but in JS it is falsy.
if (0)
if ('')
// You can run into trouble with the following code where we set a variable equal to an empty string.
const x = '';
// It will think the following is falsy and go to the default string.
const val = x || 'default';
// However, JS introduced the nullish coalescing operator (??), which has a more limited set of values that evaluate to falsy. When used only null and undefined are considered falsy values. This provides more predictable behaviour than the OR (||) operator.
const val = x ?? 'default';
```

### Supplemental Course Notes (from site)

Nullish coalescing is a relatively new operator that was introduced in ES2020. It is similar to the logical OR operator `||`, but it only returns the right-hand side if the left-hand side is `null` or `undefined`.

```javascript
const foo = null ?? 'bar';
console.log(foo); // 'bar'

const foo = 0 ?? 'bar';
console.log(foo); // 0
```
