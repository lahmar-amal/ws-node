// server creation
// http : core module
const http = require("http");

// port
const port = 8080;

// http.createServer((req, res) => res.end("hello world")).listen(port);
const server = http.createServer((_, res) => res.end("hello world"));
server.listen(port);
console.log(`this server is running on port : ${port}`);
