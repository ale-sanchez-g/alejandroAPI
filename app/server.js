var request = require("request");

var exec = require('child_process').exec;
var express = require('./node_modules/express');
var html = require("./templates/page.js");
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
            limit: '100',
            offset: '0',
            rating: 'G',
            lang: 'en' },
        headers:
        { 'postman-token': '806dc5a5-431e-f3cd-9642-05a4c1085261',
            'cache-control': 'no-cache' } };

    request(options, function (error, response, body) {
        if (error) throw new Error(error);

        var dataRes = JSON.parse(body);
        var giphyPick = randomIntInc(99,0);
        var htmlResponse = html.page().replace("string_to_replace", dataRes.data[giphyPick].embed_url);

        console.log(dataRes.data[giphyPick].embed_url);

        res.end(htmlResponse);
    });
});

app.get('/:leng', function (req, res) {

    //set language base on route
    var leng = req.params.leng;

    //backword compatible
        if ( leng=='password' ){leng='words'};

    exec(`ruby rubyPassword.rb ${leng}`, function (error, stdout) {
        if (error) console.log(error);

        passWd = stdout.replace('\n', '');

        res.json({ password: passWd });

    });
});

// routes will go here
app.get('/api/password', function(req, res) {
    var wordCount = req.query.number;
    const leng = req.query.language;
    const specl = req.query.special;
    var character;

    if (specl=='true'){
        character = ' -s'
    } else {
        character = ''
    };

    if (wordCount == null){
        wordCount = 4;
    };

    exec(`ruby rubyPassword.rb ${leng} -c ${wordCount}${character}`, function (error, stdout) {
        if (error) console.log(error);

        passWd = stdout.replace('\n', '');

        res.json({ password: passWd });

    });});

var port = process.env.PORT || 8080;        // set our port

var server = app.listen(port, function () {

    var host = "127.0.0.1";
    var port = server.address().port;

    console.log("Example app listening at http://%s:%s", host, port)

});