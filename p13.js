var http = require('http');
var process = require('process');
var url = require('url');
var server = http.createServer(function (req, res) {
    var params = url.parse(req.url, true);
    res.writeHead(200, { 'Content-Type': 'application/json' })
    if(params.pathname==='/api/parsetime'){
        var time = new Date(params.query.iso);
        var obj = {
            hour:time.getHours(),
            minute:time.getMinutes(),
            second:time.getSeconds()
        }
        res.end(JSON.stringify(obj));
    }else{
        obj = {unixtime:new Date(params.query.iso).getTime()}
        res.end(JSON.stringify(obj));
    }

});
server.listen(process.argv[2]);