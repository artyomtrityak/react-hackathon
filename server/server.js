/*jslint node: true */
'use strict';

var express = require('express'),
    app = express(),
    http = require('http'),
    config = require('./config'),
    routes = require('./routes'),
    session = require('express-session'),
    bodyParser = require('body-parser'),
    errorHandler = require('errorhandler'),
    server = http.createServer(app);

// Set static dir servering
var staticDirName = __dirname.split((__dirname.indexOf('/')>-1) ? '/' : '\\');
staticDirName.pop();
app.use(express.static(staticDirName.join('/') + '/client/build'));

// Set development nasty logs
if (process.env.NODE_ENV === 'development') {
  app.use(errorHandler());
}

// Session initialize
app.use(session({
  secret: config.sessionSecret,
  resave: false,
  saveUninitialized: true
}));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: false}));
// parse application/json
app.use(bodyParser.json());

// Set renderer
app.engine('.html', require('ejs').__express);
app.set('views', __dirname + '/pages');
app.set('view engine', 'html');

// Register routes
routes(app);

// Default route index page render
app.get('/', function (req, res) {
  res.render('index');
});

server.listen(config.port, config.ip, 511, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('App listening at http://%s:%s, mode %s', host, port, process.env.NODE_ENV);
});
