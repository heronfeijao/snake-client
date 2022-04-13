const net = require("net");

// establishes a connection with the game server
const connect = function() {
  const conn = net.createConnection({
    host: '165.227.47.243', // IP address here,
    port: 50541 // PORT number here,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  // const move = (direction, time) => {
  //   setTimeout(() => conn.write(`Move: ${direction}`), time);
  // };

  conn.on("connect", () => {
    conn.write('Name: HSF');
    // setTimeout(() => 'Move: up', 500);
    // setTimeout(() => 'Move: up', 1000);
    // setTimeout(() => 'Move: right', 1500);
    // setInterval(() => {
    //   conn.write(`Move: up`);
    // }, 500);
    // setInterval(() => {
    //   conn.write(`Move: right`);
    // }, 600);
    // move('up', 1000);
    // move('up', 1500);
    // move('right', 2000);
    // move('right', 2500);
    // move('right', 3000);
    // move('right', 3500);
    // move('right', 4000);
  });

  conn.on("data", (data) => {
    console.log(data);
  });

  return conn;
};

module.exports = {
  connect,
};