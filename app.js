"use strict";
exports.__esModule = true;
exports.helloWorld = exports.hello = void 0;
function hello() {
    return "Hello World";
}
exports.hello = hello;
;
function helloWorld() {
    if (document != null) {
        var c = document.getElementById("helloWorld").innerHTML;
        if (c === 'Try Me!') {
            document.getElementById("helloWorld").innerHTML = "Hello World!";
        }
        else {
            document.getElementById("helloWorld").innerHTML = "Try Me!";
        }
    }
}
exports.helloWorld = helloWorld;
