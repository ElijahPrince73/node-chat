var socket = io();

socket.on('connect', function () {
  console.log('Connected to server');

//Sends messgae from server
  socket.emit('createMessageServer', {
    to: 'user2',
    text:'Nada '
  })
  console.log('Sent Message');
})

socket.on('disconnect', function () {
  console.log('disconnected from server');
})

//Recieves Message from server
socket.on('createMessageClient', (createMessageClient) => {
  console.log('Recieved Message', createMessageClient);
})
