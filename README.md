# useragent-tool
Get random User-Agent HTTP Request Head.

## Installation

```shell
npm install useragent-tool
```

## Usage

In your code, you can getRandomUserAgent:

```javascript
var uaTool = require("useragent-tool");

var randomUserAgent = uaTool.getRandomUserAgent();

console.log("random useragent :", randomUserAgent);
```

or you can see the useragent pool:

```javascript
var userAgentList = uaTool.userAgentList;

console.log("useragent count is :", userAgentList.length);
```



