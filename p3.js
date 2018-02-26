/**
 * Created by dingding on 2018/2/9.
 */
var fs = require('fs');
var process = require('process');
console.log(fs.readFileSync(process.argv[2]).toString().split('\n').length-1);