// get [url]
// execute every 10 sec
// Send output to server

var http = require("http")

var options = {
  host: 'avros.tk',
  port: 3000,
  path: '/get_command'
};

var interval = setInterval(function() {
  http.get(options, function(res) {
    console.log("Got response: " + res.statusCode);
  }).on('error', function(e) {
    console.log("Got error: " + e.message);
  });
}, 1000)
