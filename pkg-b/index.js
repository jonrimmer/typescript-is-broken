"use strict";

var React = require("react");

module.exports.button = ({ label }) =>
  React.createElement("div", { children: { label } });
