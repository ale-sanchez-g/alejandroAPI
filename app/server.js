var express = require('./node_modules/express');
var app = express();
var fs = require("fs");
const genPass = require('./passwordGenerator.js');

app.get('/', function (req, res) {
        console.log( "ALEJANDRO-API"  );
        res.end( "ALEJANDRO-API" );
});


app.get('/:leng', function (req, res) {

    //set language base on route
    var leng = req.params.leng;
    var passwd = genPass(leng).replace('\n', '');
    res.json({ password: passwd });

});

var port = process.env.PORT || 8080;        // set our port

var server = app.listen(port, function () {

    var host = "127.0.0.1";
    var port = server.address().port;

    console.log("Example app listening at http://%s:%s", host, port)

});