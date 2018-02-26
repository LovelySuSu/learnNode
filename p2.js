var process = require('process');
var arr = process.argv.slice(2);
console.log(arr.reduce((a,b) => Number(a) + Number(b)));