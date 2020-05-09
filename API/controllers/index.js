"use strict";

const IndexModel = require("../models");

module.exports = (router) => {
    const model = new IndexModel();

    router.get("/", (req, res) => {
        res.send(
            "<code><pre>" + JSON.stringify(model, null, 2) + "</pre></code>"
        );
    });
};
