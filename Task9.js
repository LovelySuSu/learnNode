
var bl = require('bl');
var http = require('http');
var arg = process.argv[2];
http.get(arg,function callback (response) {
    console.log(response);
});