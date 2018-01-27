const http = require("http");
const fs = require("fs");
const qs = require("querystring");

const PORT_ONE = 7000;
const PORT_TWO = 8080;

function kindHandler(request, response) {
    response.end("Let me just tell you this: You are a sparkly rainbow of pure magnificence");
};
function otherHandler(request, response) {
    if (request.method == 'POST') {
        let formInfo = '';
        request.on('data', function (data) {
            formInfo += data;
        });
        request.on('end', function () {
            let thisString = qs.parse(formInfo);
            console.log("First Name: " + thisString.firstname);
            console.log("Last Name: " + thisString.lastname);
        });
    };
    let path = request.url;
    switch(path) {
        case "/":
            path = path + "index.html";
            return displayFile(path, request, response);
        case "/foods":
            path = path + ".html";
            return displayFile(path, request, response);
        case "/movies":
            path = path + ".html";
            return displayFile(path, request, response);
        case "/CSSfaves":
            path = path + ".html";
            return displayFile(path, request, response);
        case "/form":
            path = path + ".html";
            return displayFile(path, request, response);
        default:
            path = "/404.html";
            return displayFile(path, request, response);
    }
};
function displayFile(path, request, response) {
    fs.readFile(__dirname + path, function(err, data) {
        if(path = "/404.html") {
            response.writeHead(404, {"Content-Type":"text.html"});
            response.end(data);
        } else {
        response.writeHead(200, {"Content-Type":"text.html"});
        response.end(data);
        }
    });
};

const serverOne = http.createServer(kindHandler);
const serverTwo = http.createServer(otherHandler);

serverOne.listen(PORT_ONE, function() {
    console.log("Server listening on: http://localhost:" + PORT_ONE);
});

serverTwo.listen(PORT_TWO, function() {
    console.log("Server listening on: http://localhost:" + PORT_TWO);
});