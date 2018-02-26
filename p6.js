/**
 * Created by dingding on 2018/2/9.
 */
var read = require('./pmodule');
var process = require('process');

read(process.argv[2],process.argv[3],function callback(err,data) {
    if (err) return console.log(err);
    else data.forEach(function (val) {
        console.log(val);
    })
})