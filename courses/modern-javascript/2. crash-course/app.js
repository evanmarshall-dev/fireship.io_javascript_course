// Demonstrate Promise.
// ? const promise = new Promise((resolve, reject) => {
// Do something async here.
//   ? if (greatSuccess) {
//     ? resolve('success');
//   ? } else {
//     ? reject('failure');
//   ? }
// ? });
// Then/Catch
// ? promise

//   ? .then((success) => {
//     ? console.log('Yay!', success);
//    ? })

//   ? .catch((err) => {
//     ? console.log('Boo!', err);
//   ? });
// Async/Await
// ? async function asyncFun() {
//   ? try {
//     ? const result = await promise;
//   ? } catch (error) {
//     ? console.log(err);
//   ? }
// ? }

// Imports
// ? import helpfulFun from './help.js';
// ? import { a, b, c } from './help.js';

console.log('Hello World!');

// Common way to define a variable is called LET.
// let luckyNum = 23;
let luckyNum;
console.log(luckyNum); // undefined
// Explicitly set the value of luckyNum using null.
luckyNum = null;
// Or assign the variable to a string.
luckyNum = 'twenty-three';
// Inherit from the object class.
// ? luckyNum = new Object();
// Now for const
// ? const myName = 'John';
// Global scope
// ? const a = 'global';
// Local scope
// ? function fun() {
//   ? const a = "function";

//   ? if (true) {
//     ? const a = "block";
//     ? console.log(a); // block
//   ? }
// ? }
// Function definition
// Taking in two parameters, a and b.
// ? function add(a, b) {
// Return the sum of a and b, which can be used elsewhere.
//   ? return a + b;
// ? }
// Function expression
// ? const add = function (a, b) {
//   ? return a + b;
// ? };
// Higher order function
// ? function higherOrder(fun) {
//   ? fun();
//   ? return function () {};
// ? }
// Nested function
// ? function giveMeClosure() {
//   ? let a = 10;
//   ? return function () {
//     ? a += 1;
//     ? return a;
//   ? };
// ? }
// THIS keyword
// ? function wtfIsThis() {
//   ? console.log(this);
// ? }
// If the same function is attached to and object, the THIS keyword will refer to the object.
// ? const person = {
//   ? function wtfIsThis() {
//     ? console.log(this);
//   ? }
// ? };
// You can manually bind that function to some other object using the bind method.
// ? const person = {};
// ? const personFun = wtfIsThis.bind(person);
// Arrow Functions
// ? const person = {
//   ? wtfIsThis: () => {
//     ? console.log(this);
//   ? }
// ? }
// Object literal
// ? const human = {
//   ? dna: 'ATCG',
//   ? age: 0,
//   ? born: Date.now(),
//   ? walk() {
//     ? console.log("I'm walking!");
//   ? }
// ? };
// Object constructor
// ? const human2 = new Object();
// Prototype Chain
// ? human.__proto__.__proto__; // Object.prototype
// constructor, properties and getter/setter
// ? class Human {
//   ? constructor(name) {
//     ? this.dna = 'ATCG';
//     ? this.name = name;
//   ? }

//   ? get gender() {
//     ? return this.gender;
//   ? }

//   ? set gender(val) {
//     ? this.gender = val;
//   ? }

// Instance method
//   ? walk() {
//     ? console.log("I'm walking!");
//   ? }

//   ? static isHuman(human) {
//     ? if(human.dna === 'ATCG') {
//       ? return true;
//     ? }
//   ? }
// ? }
// ? console.log(Human);
// Array
// ? const list = ['foo', 'bar', 'baz'];
// A set is a collection of unique values.
// ? const uniqueList = new Set(list);
// A map is a collection of key-value pairs.
// ? const dict = new Map([
//   ? ['foo', 1],
//   ? ['bar', 2],
//   ? ['baz', 3]
// ? ]);
// WeakMap and WeakSet
// ? const weakDict = new WeakMap([
//   ? ['foo', 1],
//   ? ['bar', 2],
//   ? ['baz', 3]
// ? ]);
// Demonstrate Async Code. SetTimeout allows us to delay running of code for a specified amount of time.
setTimeout(() => {
  console.log('5 Seconds in the Future');
}, 5000);
// Event Listener
const button = document.querySelector('.button');
button.addEventListener('click', () => {
  console.log('Clicked!');

  document.body.style.backgroundColor = 'red';
});
