module.exports = function (RED) {
  function LeaveNode(config) {
    RED.nodes.createNode(this, config);
    this.inputText = config.inputText;
    var node = this;
    node.on("input", function (msg) {
      msg.payload = msg.payload.toLowerCase();
      // logging
      var log4js = require("log4js");
      var log = log4js.getLogger();
      log.level = "debug";
      log.debug(node.inputText);
      node.send(msg);
    });
  }
  RED.nodes.registerType("Leave", LeaveNode);
};
