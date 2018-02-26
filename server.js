/**
 * Created by dingding on 2018/2/8.
 */
var fs = require("fs");

var data = fs.readFileSync('test.js');

console.log(data.toString());
console.log("程序执行结束!");