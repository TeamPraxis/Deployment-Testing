var http = require('http');

console.log('start');
http.createServer(function (req, res) {
  console.log('created');
  setTimeout(function() {
    for(int i = 0; i < 1000000); i++){
      console.log("I just walked "+i+" miles");
    }
    console.log('sent');
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello World\n');
  }, 1000);
}).listen(80);
