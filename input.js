// Stores the active TCP connection object.
let connection;

// setup interface to handle user input from stdin
const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();

  const handleUserInput = function(key) {
    if (key === '\u0003') {
      process.stdout.write('Bye!\n');
      process.exit();
    }
    if (key === 'a') move('left');
    if (key === 'w') move('up');
    if (key === 'd') move('right');
    if (key === 's') move('down');
  };

  const move = (direction) => {
    conn.write(`Move: ${direction}`);
  };

  stdin.on("data", handleUserInput);

  return stdin;
};

module.exports = {
  setupInput,
};