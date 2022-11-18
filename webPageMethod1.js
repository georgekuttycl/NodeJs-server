const http = require("http");
var app = http.createServer((req, res) => {
    res.setHeader('content-Type', 'text/html')
    if (req.url == "/") {
        res.write(`
    <html>
    <head>
    <title>
    ${req.url}
    </title>
    </head>
    <body>
    <h1>Welcome to homepage </h1>
    </body>
    </html>

    `)
    }
    else if (req.url == "/contact") {
        res.end("<h1>Conatct</h1>")
    }
    else if (req.url == "/about") {
        res.end("<h1>About</h1>")
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