/**
 * Created by dingding on 2018/2/9.
 */
var fs = require('fs');
var Read = function () {
    this.setPath = function(path) {
        this.path = path;
    };
    this.setEnd = function (end) {
        this.end = end;
    };
    this.read= function(){
        let self = this;
        fs.readdir(self.path,function callback(err,data){
            if(err) throw Error();
            else {
                let reg = new RegExp('^.*.'+self.end+'$','i');
                data.forEach(function(val){
                    if(reg.test(val)) console.log(val);
                })
            }
        })
    }
}
module.exports = Read;