/**
 * Created by dingding on 2018/2/9.
 */
var Read = require('./pmodule');
var process = require('process');
var path = process.argv.slice(2);
var reader = new Read();
reader.setPath(path[0]);
reader.setEnd(path[1]);
reader.read();