var engine = require("engine.io-stream/client"),
  multilevel = require('multilevel'),
  manifest = require('./manifest.json');

var connection = engine('/messages'),
  db = multilevel.client(manifest);

connection.pipe(db.createRpcStream()).pipe(connection);

document.querySelector('form').addEventListener('submit', function (event) {
  var message = document.querySelector('input').value;
  if (message) {
    db.put(Date.now(), { text: message });
  }
  event.preventDefault();
});

db.createReadStream().on('data', function (item) {
  var li = document.createElement('li');
  li.innerHTML = item.value.text;
  document.querySelector('ul#messages').appendChild(li);
});

window.db = db;
