var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);


app.use(express.static("."));
app.get('/', function (req, res) {
  res.redirect('index.html');
});
server.listen(3000);




var cords = [];
io.on('connection', function (socket) {
  for (var i in cords) {
    io.sockets.emit("kordinatner", cords[i])
     
  }

  socket.on("kordinatner", function(k) {
        cords.push(k);
        io.sockets.emit("kordinatner", k);
    })


});
