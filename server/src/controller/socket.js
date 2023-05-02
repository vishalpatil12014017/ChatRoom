function chatPlatForm(io) {
  return io.on("connection", (socket) => {
    console.log("a user connected");
  
    socket.on("join", (room) => {
      socket.join(room);
      console.log(`User joined ${room}`);
    });
  
    socket.on("message", (data) => {
      io.to(data.room).emit("message", data);
    });
  
    socket.on("disconnect", () => {
      console.log("a user disconnected");
    });
  });
}

module.exports = { chatPlatForm };