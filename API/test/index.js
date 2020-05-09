/* eslint-disable no-undef */
const kraken = require("kraken-js");
const express = require("express");
const path = require("path");
const request = require("supertest");
const chai = require("chai");

const { expect } = chai;

describe("index", () => {
    let app; let
        mock;

    beforeEach((done) => {
        app = express();
        app.on("start", done);
        app.use(
            kraken({
                basedir: path.resolve(__dirname, ".."),
            }),
        );

        mock = app.listen(1337);
    });

    afterEach((done) => {
        mock.close(done);
    });

    it("should to validated index", (done) => {
        request(mock)
            .get("/")
            .expect(200)
            .expect("Content-Type", /json/)
            .end((err, res) => {
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
