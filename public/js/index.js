var socket = io();

socket.on('connect', function() {
  console.log('Connected to server');

  socket.emit('createMessage', {
    from: 'Karl',
    text: 'Hi!'
  });
});

socket.on('disconnect', function() {
  console.log('User was disconnected');
});

socket.on('newMessage', function (message) {
  console.log('New message', message);
});
