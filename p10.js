var net = require('net');
var process = require('process');
function paddingTime(val){
    return val.toString().length<2?'0'+val:val;
}
var server = net.createServer(function (socket) {
    var date = new Date();
    var year = date.getFullYear();
    var month = paddingTime(date.getMonth()+1);
    var day = paddingTime(date.getDate());
    var hour = paddingTime(date.getHours());
    var minute = paddingTime(date.getMinutes());
    socket.end(`${year}-${month}-${day} ${hour}:${minute}\n`) ;
})
server.listen(process.argv[2]);