/**
 * Created by dingding on 17/10/20.
 */
var fs = require('fs')

var arguments = process.argv[2];
fs.readFile(arguments,function(err,callback){
    if(!err) {
        console.log(callback.toString().match(/\n/g).length);
    }
});
