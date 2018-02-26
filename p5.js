/**
 * Created by dingding on 2018/2/9.
 */
var fs = require('fs');
var process = require('process');
fs.readdir(process.argv[2],function callback(err,data){
    if(err) throw Error();
    else {
        let reg = new RegExp('^.*.'+process.argv[3]+'$','i');
        data.forEach(function(val){
            if(reg.test(val)) console.log(val);
        })
    }
})

