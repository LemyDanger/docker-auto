var express = require('express');
var config = require('config');
var app = express();

app.get('/', function (req, res) {
    res.send('Aloha from '+config.state);
});

app.listen(3000, function () {
    console.log('dockerexpress 3000!');
    console.dir(config);
});