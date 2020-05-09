"use strict";

module.exports = (grunt) => {
    // Load task
    grunt.loadNpmTasks("grunt-copy-to");

    // Options
    return {
        build: {
            files: [
                {
                    cwd: "public",
                    src: ["**/*"],
                    dest: ".build/",
                },
            ],
            options: {
                ignore: ["public/templates/**/*"],
            },
        },
    };
};
