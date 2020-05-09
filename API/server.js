/* eslint-disable no-console */
"use strict";

const app = require("./index");
const http = require("http");

/*
 * Create and start HTTP server.
 */

http.createServer(app)
    .listen(process.env.PORT || 8000)
    .on("listening", function () {
        console.log(
            "Server listening on http://localhost:%d",
            this.address().port
        );
    });
