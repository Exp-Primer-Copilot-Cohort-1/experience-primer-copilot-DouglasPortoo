// Create web server application to handle comments

var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req, res) {
  console.log('Request was made: ' + req.url);
  if (req.url === '/home' || req.url === '/') {
    res.writeHead(200, {'Content-Type': 'text/html'});
    fs.createReadStream(__dirname + '/index.html').pipe(res);
  } else if (req.url === '/contact') {
    res.writeHead(200, {'Content-Type': 'text/html'});
    fs.createReadStream(__dirname + '/contact.html').pipe(res);
  } else if (req.url === '/api/comments') {
    var comments = [{name: 'John', comment: 'I like pie!'},
                    {name: 'Jane', comment: 'I like cake!'},
                    {name: 'Joe', comment: 'I like ice cream!'}];
    res.writeHead(200, {'Content-Type': 'application/json'});
    res.end(JSON.stringify(comments));
  } else {
    res.writeHead(404, {'Content-Type': 'text/html'});
    fs.createReadStream(__dirname + '/404.html').pipe(res);
  }
});
 
server.listen(3000)