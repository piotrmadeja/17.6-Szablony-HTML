var express = require('express');
var app = express();
var colors = require('colors');

app.use(express.static(__dirname + "/public"));

app.set('view engine', 'pug');
app.set('views','./views');

app.use('/auth', function(req, res, next){
    console.log('Jestem pośrednikiem przy żądaniu do '.green + '/auth'.yellow);
    next();
});

app.get('/', function (req, res) {
    res.send('/auth to enter login page xD');
});

app.get('/auth', function(req, res){
    res.render('login');
});

app.get('/auth/google', function(req, res){
    res.render('logged');
});

app.listen(3000);
app.use(function (req, res, next) {
    res.status(404).send('Fail ...')
});