/** Database connection for messagely. */

const { Client } = require("pg");
const { DB_URI } = require("./config");

const client = new Client(DB_URI);

client.connect((err) => {
  if (err) {
    console.log("Failed to connect");
  } else {
    console.log("Connect", DB_URI);
  }
});

module.exports = client;
