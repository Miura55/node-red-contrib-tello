const dgram = require("dgram");
const client = dgram.createSocket("udp4");

const HOST = "192.168.10.1";
const PORT = 8889;

const sendCommand = (command) => {
  const message = Buffer.from(command);
  client.send(message, 0, message.length, PORT, HOST, (err, bytes) => {
    if (err) throw err;
  });
};

// Ready to Flight
sendCommand("command");

module.exports = function (RED) {
  function takeoffNode(config) {
    RED.nodes.createNode(this, config);
    var node = this;
    node.on("input", function (msg) {
      sendCommand("takeoff");
      node.send(msg);
    });
  }
  RED.nodes.registerType("takeoff", takeoffNode);

  function landNode(config) {
    RED.nodes.createNode(this, config);
    var node = this;
    node.on("input", function (msg) {
      sendCommand("land");
      node.send(msg);
    });
  }
  RED.nodes.registerType("land", landNode);
};
