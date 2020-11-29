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

  function upNode(config) {
    RED.nodes.createNode(this, config);
    this.distance = config.distance || 0;
    var node = this;
    node.on("input", function (msg) {
      sendCommand("up " + node.distance);
      RED.log.info("Result land command: " + telloState);
      msg.payload = telloState;
      node.send(msg);
    });
  }
  RED.nodes.registerType("up", upNode);

  function downNode(config) {
    RED.nodes.createNode(this, config);
    this.distance = config.distance || 0;
    var node = this;
    node.on("input", function (msg) {
      sendCommand("down " + node.distance);
      RED.log.info("Result land command: " + telloState);
      msg.payload = telloState;
      node.send(msg);
    });
  }
  RED.nodes.registerType("down", downNode);

  function forwardNode(config) {
    RED.nodes.createNode(this, config);
    this.distance = config.distance || 0;
    var node = this;
    node.on("input", function (msg) {
      sendCommand("forward " + node.distance);
      RED.log.info("Result land command: " + telloState);
      msg.payload = telloState;
      node.send(msg);
    });
  }
  RED.nodes.registerType("forward", forwardNode);

  function backNode(config) {
    RED.nodes.createNode(this, config);
    this.distance = config.distance || 0;
    var node = this;
    node.on("input", function (msg) {
      sendCommand("back " + node.distance);
      RED.log.info("Result land command: " + telloState);
      msg.payload = telloState;
      node.send(msg);
    });
  }
  RED.nodes.registerType("back", backNode);

  function rightNode(config) {
    RED.nodes.createNode(this, config);
    this.distance = config.distance || 0;
    var node = this;
    node.on("input", function (msg) {
      sendCommand("right " + node.distance);
      RED.log.info("Result land command: " + telloState);
      msg.payload = telloState;
      node.send(msg);
    });
  }
  RED.nodes.registerType("right", rightNode);

  function leftNode(config) {
    RED.nodes.createNode(this, config);
    this.distance = config.distance || 0;
    var node = this;
    node.on("input", function (msg) {
      sendCommand("left " + node.distance);
      RED.log.info("Result land command: " + telloState);
      msg.payload = telloState;
      node.send(msg);
    });
  }
  RED.nodes.registerType("left", leftNode);
};
