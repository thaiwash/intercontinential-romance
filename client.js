// get [url]
// execute every 10 sec
// Send output to server

var request = require('request');


request('http://avros.tk:3000/get_command', function (error, response, body) {
  if (!error && response.statusCode == 200) {
    console.log(body) // Show the HTML for the Google homepage.
    if (body != "OK") {
      
    }
  }
  else {
    console.log("Error "+response.statusCode)
  }
})
