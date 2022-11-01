const net = require("net")

// establishes a connection with the game server
const connect = function() {
  const conn = net.createConnection({
    host: '192.168.1.72', // IP address here,
    port: 50541, // PORT number here,
  });
  conn.on("data", (data) => {
    console.log("Server says: ", data);
  });

  conn.on("connect", (connect) => {
    console.log("Successfully connected to game server")
  });

  conn.on("connect", (connect) => {
    conn.write("Name: LML")
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  return conn;
};

module.exports = {connect};
