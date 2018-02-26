/**
 * Created by dingding on 17/10/30.
 */
var bl = require('bl');
var http = require('http');
var arg = process.argv[2];
http.get(arg,function callback (response) {
    response.pipe(bl(function (err, data) {
        if(!err) {
            data = data.toString();
            console.log(data.length);
            console.log(data);
        }
    }))
});
