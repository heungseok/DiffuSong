/**
 * Created by heungseok2 on 2017-02-23.
 */

var express = require('express');
var app = express();
var http = require('http').Server(app);
// var world = require('./js/server_world');

app.use('/js', express.static(__dirname + '/js'));
app.use('/css', express.static(__dirname + '/css'));
app.use('/data', express.static(__dirname + '/data'));
app.use('/img', express.static(__dirname + '/img'));


app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html');
});
app.get('/index_backup.html', function (req, res) {
    res.sendFile(__dirname + '/index_backup.html');
});



http.listen(5555, function(){
    console.log("Server Running and Listen to port 5555");
});