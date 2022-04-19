var http = require ('http');
var port = procss.env.PORT|| 3000; 
console.log("this goes to console");
http.createServe(function (req, res)
{
 res.writeHead(200, {'Content-Type': 'text/html'});
 res.write("<h2>Hello World</h2>"); 
 res.write("success!");
 res.end();
}).listen(port);