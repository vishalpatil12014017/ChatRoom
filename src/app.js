const express = require("express");
const app = express();
const { Server } = require("socket.io");
const http = require("http");
const server = http.createServer(app);
const io = new Server(server);
const path = require("path");
const { chatPlatForm } = require("./controller/socket");
const port = 3535;
const parentDir = path.dirname(__dirname);

app.get("/", (req, res) => {
  res.sendFile(parentDir + "/view/index.html");
});

chatPlatForm(io);

server.listen(port, () => {
  console.log(`Server is listening at the port: ${port}`);
});
