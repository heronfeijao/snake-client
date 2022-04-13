const net = require("net");
const { connect } = require('./client');

// setup interface to handle user input from stdin
const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();

  const handleUserInput = function(key) {
    if (key === '\u0003') {
      process.stdout.write('BYE!\n');
      process.exit();
    }
  };

  stdin.on("data", handleUserInput);

  return stdin;
};

setupInput();

console.log("Connecting ...");
connect();