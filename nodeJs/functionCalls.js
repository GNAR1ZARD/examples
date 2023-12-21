// top level code
// this will run immediately when the script is executed
console.log('This is top-level code');

// function declaration
// this wont run until its called
function notCalled() {
  console.log('This function is declared but not called.');
}

// function call 
// this will run immediately after the declaration
function calledFunction() {
  console.log('This function is called immediately.');
}
calledFunction(); // this is the explicit call

// IIFE, this will run immediately
(function iifeFunction() {
  console.log('This IIFE runs immediately.');
})();
