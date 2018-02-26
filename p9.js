/**
 * Created by dingding on 2018/2/11.
 */
var http = require('http');
var process = require('process');
var bl = require('bl');
var a = new Promise(function  (resolve,reject) {
    http.get(process.argv[2],function callback(response){
        response.pipe(bl(function (err, data) {
            if(err) throw new Error();
            else{
                resolve(data.toString());
            }
        }));
    });
});
var b = new Promise(function  (resolve,reject) {
    http.get(process.argv[3],function callback(response){
        response.pipe(bl(function (err, data) {
            if(err) throw new Error();
            else{
                resolve(data.toString());
            }
        }));
    });
});
var c = new Promise(function  (resolve,reject) {
    http.get(process.argv[4],function callback(response){
        response.pipe(bl(function (err, data) {
            if(err) throw new Error();
            else{
                resolve(data.toString());
            }
        }));
    });
});
Promise.all([a,b,c]).then(function (list) {
    list.forEach(function(val){
        console.log(val);
    });
});