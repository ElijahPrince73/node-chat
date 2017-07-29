const path = require('path');
const http = require('http');
const express = require('express');
const socketIO  = require('socket.io');

const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3000;

var app = express();

var server = http.createServer(app)
var io = socketIO(server);

app.use(express.static(publicPath));

io.on('connection' , (socket) => {
  console.log('new user connected');

  var d = new Date ();
  var n = d.getMinutes();

//Sends messgae to client
  socket.emit('createMessageClient', {
    from: 'user1',
    text:'Hey Whats Up',
    createdAt: n
  })

  //Recieves Message
  socket.on('createMessageServer', (createMessageServer) => {
    console.log('Recieved Message', createMessageServer);
  })

  socket.on('disconnect', () => {
    console.log('disconnected from server ');
  })
})

server.listen(port, () => {
  console.log(`Server is up on ${port}`);
});
