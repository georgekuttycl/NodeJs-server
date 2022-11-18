const http = require("http");
const fs  = require("fs");
var app = http.createServer((req, res) => {
    res.setHeader('content-Type', 'text/html')
    if (req.url == "/") {
       var content = fs.readFileSync('templates/index.html','utf8');
       res.end(content);
    }
    else if (req.url == "/contact") {
        var content = fs.readFileSync('templates/contact.html','utf8');
        res.end(content);
    }
    else if (req.url == "/about") {
        var content = fs.readFileSync('templates/about.html','utf8');
        res.end(content);
    }
});
app.on('listening', () => {
    console.log("Server listening on port number 3000")
});

app.on('request', (req, res) => {
    console.log(`${req.method} request to page:${req.url}`);
    res.end();
})
// app.listen(3000,'127.0.0.1')
app.listen(3000)


//url and method,