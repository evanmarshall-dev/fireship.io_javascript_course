// Grab the first button in HTML DOM.
// ? const btn = document.querySelector('button');

// Make the button interactive by adding an event listener.
// ? btn.onclick = () => {
//   ? alert('You clicked me! 🥰');
// ? };

// First-class functions
// ? const fun = () => 'Functional Programming FTW!';

// Javascript also supports classes and inheritance for object-oriented programming (OOP).
// ? class Humanoid {
//   ? constructor() {
//     ? this.dna = '🧬';
//   ? }

//   ? walk() {
//     ? console.log('Walking...');
//   ? }
// ? }

// Even though Javascript is a single-threaded language, it supports asynchronous programming with the promise API.
// ? const wait = new Promise((resolve, reject) => {
//   ? setTimeout(() => {
//     ? resolve('Thank you for waiting! ⏰');
//   ? }, 1000);
// ? });

// ? wait.then(doSomething).catch(handleError);

// Which also supports async/await syntax.
// ? async function doSomething() {
//   ? await longRunningJob();
// ? }

// JS code can also run on the server-side with Node.js. Instead of acting on buttons on a webpage it interacts with the file system API and network.
// ? import { readFile } from 'fs/promises';

// ? readFile('./the-anatomy-of-the-state.txt', 'utf-8');

// Then you can run the code with Node.js runtime by typing `node app.js` in the terminal.
console.log('Hi Mom ❤️');
