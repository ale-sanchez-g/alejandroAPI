var express = require('./node_modules/express');
var app = express();
var fs = require("fs");

app.get('/', function (req, res) {
        console.log( "ALEJANDRO-API"  );
        res.end( "ALEJANDRO-API" );
});

app.get('/listUsers', function (req, res) {
    fs.readFile( __dirname + "/" + "users.json", 'utf8', function (err, data) {
        console.log( data );
        res.end( data );
    });
});

app.get('/password', function (req, res) {
    var exec = require('child_process').exec;

    var child = exec('ruby server.rb password', function(error, stdout, stderr) {
        if (error) res.end(error);
        res.end(stdout);
        res.end(stderr);
    });
});

var server = app.listen(3001, function () {

    var host = "127.0.0.1";
    var port = server.address().port;

    console.log("Example app listening at http://%s:%s", host, port)

});