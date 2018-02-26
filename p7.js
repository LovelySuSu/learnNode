/**
 * Created by dingding on 2018/2/11.
 */
var http = require('http');
var process = require('process');
http.get(process.argv[2],function callback(response){
    response.setEncoding('utf-8');
    response.on('data',function(data){
        console.log(data);
    });
});