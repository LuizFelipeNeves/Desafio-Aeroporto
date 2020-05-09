"use strict";

module.exports = (grunt) => {
    // Load task
    grunt.loadNpmTasks("grunt-contrib-clean");

    // Options
    return {
        tmp: "tmp",
        build: ".build/templates",
    };
};
