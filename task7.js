/**
 * Created by dingding on 17/10/24.
 */
var http = require('http');
var arg = process.argv[2];
http.get(arg,function callback (response) {
    response.on("data", function (data) {
       console.log(data.toString());
    })
});