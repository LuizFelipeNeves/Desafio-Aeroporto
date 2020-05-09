"use strict";

module.exports = (grunt) => {
    grunt.loadNpmTasks("grunt-copy-browser-modules");

    return {
        build: {
            root: process.cwd(),
            dest: "public/components",
            basePath: "public",
        },
    };
};
