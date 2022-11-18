const http = require("http");
const qs = require("qs");
const url = require('url');
var server = http.createServer((req, res) => {
    const link = url.parse(req.url, true);
    const path = link.pathname;

    if (path == "/") {
        res.end("Welocome");
    }
    else if (path == "/api/users") {
        let users = getUsers();


        let itemsPerPage = 2;
        let totalPages = Math.ceil(users.length / itemsPerPage);
        // let pageNumber = parseInt(link.query.page);
        let pageNumber = 1;

        let requestedPage = parseInt(link.query.page);
        if(!isNaN(requestedPage)){
            pageNumber = requestedPage;
        }
        let startIndex = ((pageNumber - 1) * itemsPerPage);
        let endIndex = pageNumber * itemsPerPage;


        let response = {
            itemsPerPage: itemsPerPage,
            totalPages: totalPages,
            pageNumber: pageNumber,
            data: users.slice(startIndex,endIndex)
        }
        // let json = JSON.stringify(getUsers());
        let json = JSON.stringify(response);
        res.setHeader('content-Type', 'application/json')
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