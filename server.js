var http = require('http');

console.log('start');
http.createServer(function (req, res) {
  console.log('created');
  setTimeout(function() {
    console.log('sent');
    res.writeHead(304, {'Content-Type': 'text/plain'});
    res.end('Hello World\n');
  }, 1000);
}).listen(80);
