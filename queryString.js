const http = require('http');
const fs = require('fs');
const url = require('url');

var server = http.createServer((req,res)=>{
 let address = url.parse(req.url, true);
 let query = address.query;
 let path = address.pathname;
 console.log(address);
   res.setHeader('Content-Type', 'text/html')
 if(path == "/login"){
    var content = fs.readFileSync('templates/login.html','utf8');
    res.end(content);
 }
 else if(path=="/result"){
  res.write(query.email);
  res.write(query.password);
  res.end(`
  <html>
    <head>
    <title>
    </title>
    </head>
    <body>

    <h1>${query.email}</h1>
    </br>
    <h2>${query.password}</h2>
    </body>
    </html>
  `);

 }
});

server.listen(80)