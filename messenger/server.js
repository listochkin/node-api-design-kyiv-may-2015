var http = require('http'),
  fs = require('fs'),
  browserify = require('browserify'),
  es = require("engine.io-stream"),
  level = require('levelup'),
  memdown = require('memdown'),
  multilevel = require('multilevel');

var server = http.createServer(function (req, res) {
  if (req.url === '/') {
    fs.createReadStream('./index.html').pipe(res);
  } else if (req.url === '/bundle.js') {
    browserify(['./browser.js']).bundle().pipe(res);
  } else {
    res.statusCode = 404;
    res.end();
  }
});

var db = level('/db', { db: memdown, valueEncoding: 'json' });

multilevel.writeManifest(db, './manifest.json');

var engine = es(function(connection) {
  connection.pipe(multilevel.server(db)).pipe(connection);
});

engine.attach(server, "/messages")

var port = process.env.PORT || 3000;

server.listen(port, function () {
  console.log('Server is running on http://localhost:' + port);
});
