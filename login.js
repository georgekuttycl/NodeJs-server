const http = require("http");
const fs  = require("fs");
var app = http.createServer((req, res) => {
    res.setHeader('content-Type', 'text/html')
    let url = req.url.split('?')[0];
    console.log(url);
    // console.log(req.url);

    if (url == "/login") {
       var content = fs.readFileSync('templates/login.html','utf8');
       res.end(content);
    }

});
app.on('listening', () => {
    console.log("Server listening on port number 3000")
});

app.on('request', (req, res) => {
    console.log(`${req.method} request to page:${req.url}`);
    res.end(`

    `);
})
// app.listen(3000,'127.0.0.1')
app.listen(3000)


//url and method,