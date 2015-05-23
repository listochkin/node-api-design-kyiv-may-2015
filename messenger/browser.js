var engine = require("engine.io-stream/client"),
  multilevel = require('multilevel'),
  manifest = require('./manifest.json');

var connection = engine('/messages'),
  db = multilevel.client(manifest);

connection.pipe(db.createRpcStream()).pipe(connection);

window.db = db;
