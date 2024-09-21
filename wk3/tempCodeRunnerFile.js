var http = require('http');
var url = require('url');
var fs = require('fs');

http.createServer(function (req, res) {
  var q = url.parse(req.url, true); /*create QUERY, parse an address with 
  the url.parse() method, and it will return a URL object with each part of the address */
  var filename = "." + q.pathname; 
  /* PATHNAME is the path section of the URL, that comes after the host and before the query, 
  including the initial slash if present. for example: http://GeorgeBrown.ca/Welcome/hello 
  pathname here is [Welcome/hello] in our example the pathname is only file name
  */ 
  fs.readFile(filename, function(err, data) {
   /* function(err, data): is a callback function is called after reading the file. 
    It takes two parameters: err: If any error occurred, data: Contents of the file.
    this function return Value: It returns the contents/data stored in file or error if any.*/

    if (err) {
      res.writeHead(404, {'Content-Type': 'text/html'});
      return res.end("404 Not Found");
    } 
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    return res.end();
  });
}).listen(8080);

console.log("http://localhost:8080/file1.html")
console.log("OR")
console.log("http://localhost:8080/file2.html")