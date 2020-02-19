const { datadog } = require("datadog-lambda-js");
const original = require("../src/index");
module.exports.handler = datadog(original.handler);