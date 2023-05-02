const express = require("express");
const http = require("http");
const {chatPlatForm} = require('./controller/socket')
const socketIo = require("socket.io");
const cors = require("cors");

const app = express();
const server = http.createServer(app);
const io = require('socket.io')(server, {
  cors: {
    origin: '*'
  }
});

app.use(cors());

const PORT = process.env.PORT || 3535;

chatPlatForm(io)

server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
