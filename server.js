var http = require("http");
var url = require("url");

function start(route) {
	function onRequest(request, response) {
        var pathname = url.parse(request.url).pathname;
		console.log("Request for " + pathname + " received");

        route(pathname);

        response.writeHead(200, { "Content-Type": "text/plain" });
		response.write("Hello World");
		response.end();
	}

	function serverCallback() {
		console.log("Serving http at port 8888");
	}

	http.createServer(onRequest).listen(8888, serverCallback);
}

exports.start = start;

// console.log("Server is still running while I'm executing");