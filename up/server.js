const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const dataReader = require('./dataAccessor/readJsonFile');

//TODO: change the method readfile to provideData and get the file in the method and not here
let users = dataReader.readFile('users.json');
let tweets = dataReader.readFile('tweets.json');

app.use(function(req, res, next) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        next();
});

app.use(bodyParser.json());

app.use('/', express.static(path.resolve('../public')));
app.use('/', express.static(path.resolve('../public/html/')));

app.listen(7000, function () {
    console.log('Example app listening on port 3000!')
});

app.get('/users', function(req, res, next) {
    res.send(users);
});

app.get('/tweets', function(req, res, next) {
    res.send(tweets);
});

app.put('/tweet', function(req, res, next) {
    tweets.push(req.body);
});
