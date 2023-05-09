import { useState, useEffect } from "react";
import io from "socket.io-client";

const socket = io("http://localhost:3535");

function useChat() {
  const [room, setRoom] = useState("");
  const [username, setUsername] = useState("");
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [joined, setJoined] = useState(0);

  useEffect(() => {
    socket.on("message", (data) => {
      setMessages((prevMessages) => [...prevMessages, data]);
    });
    
    return () => {
      socket.off("message");
    }
  }, []);

  function handleJoin() {
    setJoined(1);
    socket.emit("join", room);
    
  }

  function handleExit() {
    setJoined(0);
    setRoom("");
    setUsername("");
    setMessages([]);
    socket.disconnect();
  }

  function handleSend() {
    const data = {
      room,
      username,
      message,
    };
    socket.emit("message", data);
    setMessage("");
  }

  return {
    room,
    setRoom,
    username,
    setUsername,
    message,
    setMessage,
    messages,
    joined,
    handleJoin,
    handleExit,
    handleSend,
  };
}

export default useChat;