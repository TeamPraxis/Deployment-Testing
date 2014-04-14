var http = require('http');

console.log('start');
var app = http.createServer(function (req, res) {
  console.log('created');
  for(var i = 0; i < 1000; i++){
    console.log("hello");
  };
  setTimeout(function() {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello World\n');
  }, 1000);
});

process.on('SIGTERM', function () {
  console.log("Closing");
  app.close();
});

app.listen(80);
