const http = require("http");

const PORT_ONE = 7000;
const PORT_TWO = 7500;

function kindHandler(request, response) {
    response.end("Let me just tell you this: You are a sparkly rainbow of pure magnificence");
};
function unkindHandler(request, response) {
    response.end("WOWEEE. You are so dumb.");
};
const serverOne = http.createServer(kindHandler);
const serverTwo = http.createServer(unkindHandler);

serverOne.listen(PORT_ONE, function() {
    console.log("Server listening on: http://localhost:" + PORT_ONE);
});

serverTwo.listen(PORT_TWO, function() {
    console.log("Server listening on: http://localhost:" + PORT_TWO);
});