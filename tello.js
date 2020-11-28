const dgram = require("dgram");
const client = dgram.createSocket("udp4");
const server = dgram.createSocket("udp4");

var osdData = {};
var telloState = "";

const CLIENT_HOST = "192.168.10.1";
const CLIENT_PORT = 8889;

const SERVER_HOST = "0.0.0.0";
const SERVER_PORT = 8890;

const LOCALPORT = 50602;
client.bind(LOCALPORT);

const sendCommand = (command) => {
  const message = Buffer.from(command);
  client.send(
    message,
    0,
    message.length,
    CLIENT_PORT,
    CLIENT_HOST,
    (err, bytes) => {
      if (err) throw err;
    }
  );
};

// start recieve responce from Tello
client.on("message", function (msg, info) {
  console.log("Tello's Response: " + msg.toString());
  console.log(
    "Recieved %d bytes from %s:%d",
    msg.length,
    info.address,
    info.port
  );
  telloState = msg.toString();
});

const listenState = function () {
  server.on("message", (msg, info) => {
    msg = msg.toString().trim();
    const fieldList = msg.split(";");
    fieldList.forEach(function (field) {
      let [key, value] = field.split(":");
      osdData[key] = value;
    });
  });
  server.on("listening", () => {
    const address = server.address();
    console.log(address);
  });

  server.bind(SERVER_PORT, SERVER_HOST);
};

// Ready to Flight
sendCommand("command");

// start listen state
listenState();

module.exports = function (RED) {
  function takeoffNode(config) {
    RED.nodes.createNode(this, config);
    var node = this;
    node.on("input", function (msg) {
      sendCommand("takeoff");
      RED.log.info("Result takeoff command: " + telloState);
      msg.payload = telloState;
      node.send(msg);
    });
  }
  RED.nodes.registerType("takeoff", takeoffNode);

  function landNode(config) {
    RED.nodes.createNode(this, config);
    var node = this;
    node.on("input", function (msg) {
      sendCommand("land");
      RED.log.info("Result land command: " + telloState);
      msg.payload = telloState;
      node.send(msg);
    });
  }
  RED.nodes.registerType("land", landNode);
};
