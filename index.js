const http = require("http");
var app = http.createServer((req,res)=>{
    res.setHeader('content-Type','text/html')
//   res.end("<h1>Hello World</h1>")
//   console.log(req.url);
// console.log(req.method,req.url);
// console.log(res);
for(let i=0;i<10;i++){
    res.write(`<h1>${i}</h1>`)
}
res.end();
}
);
// app.listen(3000,'127.0.0.1')
app.listen(4000)


//url and method,