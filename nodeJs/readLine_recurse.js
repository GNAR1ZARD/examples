// require the readline module to read from the console
const readline = require('readline');

// create an interface for reading from stdin and writing to stdout
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// array to store the inputs from the user
const inputs = [];

// function that prompts the user for input and returns a promise
const getLine = (prompt) => {
  return new Promise((resolve, reject) => {
    // use the question method to write the prompt to stdout and wait for user input
    rl.question(prompt, (input) => {
      resolve(input); // resolve the promise with the input
    });
  });
};

// async function to run the input gathering process
const main = async () => {
  const name = await getLine('Enter the name: '); // await the input for name
  const position = await getLine('Enter the position: '); // await the input for position
  
  // add the gathered inputs to the inputs array
  inputs.push({ name, position });

  // output the gathered inputs
  console.log(`You entered: Name: ${name}, Position: ${position}`);

  // logic that uses the inputs could be added here

  // close the readline interface to end the program
  rl.close();
};

// start the program
main();
