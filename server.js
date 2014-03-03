var http = require("http");

function start() {
	function onRequest(request, response) {
		console.log("request received");
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