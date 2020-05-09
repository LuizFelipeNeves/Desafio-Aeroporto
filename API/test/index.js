/* eslint-disable no-undef */
/*global describe:false, it:false, beforeEach:false, afterEach:false*/

"use strict";

var kraken = require("kraken-js"),
    express = require("express"),
    path = require("path"),
    request = require("supertest"),
    chai = require("chai"),
    expect = chai.expect;

describe("index", function () {
    var app, mock;

    beforeEach(function (done) {
        app = express();
        app.on("start", done);
        app.use(
            kraken({
                basedir: path.resolve(__dirname, "..")
            })
        );

        mock = app.listen(1337);
    });

    afterEach(function (done) {
        mock.close(done);
    });

    it("should to validated index", function (done) {
        request(mock)
            .get("/")
            .expect(200)
            .expect("Content-Type", /json/)
            .end(function (err, res) {
                if (err) {
                    return done(err);
                }
                expect(res.body.diasPrimeiroAeroporto).exist;
                expect(res.body.diasTodosAeroportos).exist;
                expect(res.body.mapa).exist;
                expect(res.body.mapa).length(10);
                expect(res.body.mapa[0]).length(10);
                return done();
            });
    });
});
