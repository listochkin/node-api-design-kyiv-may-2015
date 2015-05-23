var http = require('http'),
  fs = require('fs'),
  browserify = require('browserify');

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

var port = process.env.PORT || 3000;

server.listen(port, function () {
  console.log('Server is running on http://localhost:' + port);
});
