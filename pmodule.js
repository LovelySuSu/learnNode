/**
 * Created by dingding on 2018/2/9.
 */
function Read(dir,tail,fn){
    var fs = require('fs');
    this.readFile = function () {
        fs.readdir(dir,function callback(err,data){
            if(err) return fn(err);
            else {
                let reg = new RegExp('^.*.'+tail+'$','i');
                return fn(null,data.filter(val=>reg.test(val)))
            }
        })
    }
}
module.exports = Read;