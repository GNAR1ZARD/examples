const readline = require('readline');

// create an interface for input and output through the console
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// callback function
// this function is passed to rl.question and will execute when the user inputs something
// prompt the user for input
rl.question('Enter your input: ', function(input) {
  console.log(`You entered: ${input}`);
  
  // close the readline interface
  // dont forget!
  rl.close();
});

// or
// arrow function

// // prompt the user for input
// rl.question('Enter your input: ', (input) => {
//   console.log(`You entered: ${input}`);
  
//   // close the readline interface
//   // dont forget!
//   rl.close();
// });
