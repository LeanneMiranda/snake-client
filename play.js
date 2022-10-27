const net = require("net");

const conn = net.createConnection({
  host: '165.227.47.243', // change to IP address of computer
  port: 50541,
});

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: '165.227.47.243', // IP address here,
    port: 50541, // PORT number here,
  });
  conn.on("data", (data) => {
    console.log("Server says: ", data);
  });
  
  // interpret incoming data as text
  conn.setEncoding("utf8");

  return conn;
};

console.log("Connecting ...");
connect();