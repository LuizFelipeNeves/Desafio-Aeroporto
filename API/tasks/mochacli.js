"use strict";

module.exports = (grunt) => {
    // Load task
    grunt.loadNpmTasks("grunt-mocha-cli");

    // Options
    return {
        src: ["test/**/*.js"],
        options: {
            timeout: 6000,
            "check-leaks": true,
            ui: "bdd",
            reporter: "spec",
        },
    };
};
