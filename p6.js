/**
 * Created by dingding on 2018/2/9.
 */
var Read = require('./pmodule');
var process = require('process');
var read = new Read(process.argv[2],process.argv[3],function callback(err,data){
    if(err) return console.error('There was an error:', err)
    else data.forEach(function (val) {
        console.log(val);
    });
});
read.readFile();