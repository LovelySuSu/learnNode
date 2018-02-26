/**
 * Created by dingding on 2018/2/8.
 */
var WebSocketServer = require('ws').Server,
    wss = new WebSocketServer({ port: 8181 });
wss.on('connection', function (ws) {
    console.log('hhhhhh');
    ws.on('message', function (message) {
        console.log(message);
    });
    ws.send('hello')
});