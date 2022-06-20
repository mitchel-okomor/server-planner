// const fs = require('fs');
// const http = require('http');
// const path = require('path');

// const hostname = '127.0.0.1';
// const port = 3000;

// const server = http.createServer((req:any, res:res) => {
//   console.log(req.url);
//   console.log(req.method);

//   if (req.url === '/') {
//     res.writeHead(200);
//     res.end('Server planner service');
//   }
// });

// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });

function sum(a:number, b:number) {
	return a + b;
  }
  module.exports = sum;