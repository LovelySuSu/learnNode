/**
 * Created by dingding on 2018/2/11.
 */
var http = require('http');
var process = require('process');
var bl = require('bl');
http.get(process.argv[2],function callback(response){
    response.pipe(bl(function (err, data) {
        if(err) throw new Error();
        else{
            console.log(data.length);
            console.log(data.toString());
        }
    }));
});