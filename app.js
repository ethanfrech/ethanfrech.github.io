function hello() {
    return "Hello World";
}
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
export { hello, helloWorld };
//# sourceMappingURL=app.js.map