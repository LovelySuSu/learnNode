/**
 * Created by dingding on 2018/2/9.
 */
var fs = require('fs')
var path = require('path')

function readFile(dir, tail, fn) {
    fs.readdir(dir, function (err, data) {
        if (err) return fn(err);
        else{
            let reg = new RegExp('^.*.'+tail+'$','i')
            fn(null,data.filter(val=>reg.test(val)));
        }
    })
}
module.exports = readFile;