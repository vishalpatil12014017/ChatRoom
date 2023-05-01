function chatPlatForm(io) {
  return io.on('connection', (socket) => {
      socket.on('sendName', (userName) => {
        io.emit('sendName', (userName));
      });
    
      socket.on('sendMessage', (message) => {
        io.emit('sendMessage', (message));
      });
    });  
}

module.exports = { chatPlatForm };