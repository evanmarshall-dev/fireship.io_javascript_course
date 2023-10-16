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
class Human {
  constructor(name) {
    this.dna = 'ATCG';
    this.name = name;
  }

  get gender() {
    return this.gender;
  }

  set gender(val) {
    this.gender = val;
  }
}
console.log(Human);
