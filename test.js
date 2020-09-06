var uaTool = require("./index");

var randomUserAgent = uaTool.getRandomUserAgent();
console.log("random useragent :", randomUserAgent);

var userAgentList = uaTool.userAgentList;
console.log("useragent count is :", userAgentList.length);