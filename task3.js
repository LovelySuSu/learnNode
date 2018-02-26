/**
 * Created by dingding on 17/10/19.
 */
var fs = require('fs')

var arguments = process.argv[2];
var contents = fs.readFileSync(arguments).toString();
console.log(contents.match(/\n/g).length);
