console.log("this is a test");
  
var http = require('http');

http.createServer(function (request, response) {
    response.writeHead(200, {'Content-Type': 'text/html', 'charset' : "UTF-8"});
    response.end('Hello, this is a web server\n');
}).listen(8080);

console.log('Server running at http://localhost:8080/');


