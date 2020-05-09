
const http = require("http");
const app = require("./index");

/*
 * Create and start HTTP server.
 */

const server = http.createServer(app);
const port = process.env.PORT || 8000;

server.listen(port);
server.on("listening", () => {
    console.log("Server listening on http://localhost:%d", port);
});
