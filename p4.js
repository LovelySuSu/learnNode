/**
 * Created by dingding on 2018/2/9.
 */
var fs = require('fs');
var process = require('process');
fs.readFile(process.argv[2],function callback (err, data){
    if(err) throw Error();
    else console.log(data.toString().split('\n').length-1);
})