const http = require("http");
const qs = require("qs");
const url = require('url');
var server = http.createServer((req, res) => {
    const link = url.parse(req.url, true);
    const path = link.pathname;

    if (path == "/") {
        res.end("Welcome");
    }
    else if (path == "/api/users") {
        let users = getUsers();
        let id = link.query.id;

        let user = null;
        for (let i = 0; i < users.length; i++) {
            if (users[i].id == id) {
                user = users[i];
                break;
            }
        }
        let json = JSON.stringify({ data: user });
        res.setHeader('content-Type', 'application/json');
        res.end(json);
    }
});

server.listen(80);

function getUsers() {
    let id = 1;
    return [
        { id: id++, name: "Georgekutty", email: "george@email.com" },
        { id: id++, name: "Thomaskutty", email: "Thomas@email.com" },
        { id: id++, name: "Mathukutty", email: "mathu@gmail.com" },
        { id: id++, name: "kunjalikutty", email: "kunjali@gmail.com" },
    ]
}