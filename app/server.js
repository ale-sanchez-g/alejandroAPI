var express = require('./node_modules/express');
var request = require("request");
const genPass = require('./passwordGenerator.js');
const htmlPage = '<!DOCTYPE html><html><header></header><body>' +
    ' <div style="width:300;height:300;padding-bottom:99%;position:relative;"><iframe src="' +
    'string_to_replace' +
    '" width="300" height="300" style="position:absolute" frameBorder="0" class="giphy-embed" allowFullScreen></iframe></div><p><a href="' +
    'string_to_replace' +
    '">via GIPHY</a></p>' +
    '</body></html>';


var app = express();
var fs = require("fs");

function randomIntInc (low, high) {
    return Math.floor(Math.random() * (high - low + 1) + low);
}


app.get('/', function (req, res) {
        console.log( "ALEJANDRO-API"  );
        res.end( "ALEJANDRO-API" );
});

app.get('/giphy/:tagName', function (req, res) {
    var tagN = req.params.tagName;

    var options = { method: 'GET',
        url: 'https://api.giphy.com/v1/gifs/search',
        qs:
        { api_key: '114548ec7f56484e9225fa9c9d0e6f99',
            q: tagN,
            limit: '25',
            offset: '0',
            rating: 'G',
            lang: 'en' },
        headers:
        { 'postman-token': '806dc5a5-431e-f3cd-9642-05a4c1085261',
            'cache-control': 'no-cache' } };

    request(options, function (error, response, body) {
        if (error) throw new Error(error);
        var dataRes = JSON.parse(body);
        var giphyPick = randomIntInc(24,0);
        console.log(giphyPick);
        console.log(dataRes.data[giphyPick].embed_url);
        var htmlResponse = htmlPage.replace("string_to_replace", dataRes.data[giphyPick].embed_url);
        res.end(htmlResponse);
    });
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