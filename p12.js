var http = require('http');
var process = require('process');
var map = require('through2-map')
var server = http.createServer(function (req, res) {
    req.pipe(map(function (chunk) {
        return chunk.toString().toUpperCase();
    })).pipe(res);
});
server.listen(process.argv[2]);