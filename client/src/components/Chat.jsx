import React from "react";
import useChat from "../hooks/useChat";
import ChatMessageList from "./ChatMessageList";
import RoomInput from "./RoomInput";
import UsernameInput from "./UsernameInput";
import UserMessageInput from "./UserMessageInput";
function Chat() {
  const {
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
  } = useChat();

  return (
    <div className="bg-gray-200 min-h-screen flex flex-col justify-center items-center">
      <div className="bg-white rounded-md shadow-md p-8">
        <h2 className="text-2xl font-bold mb-4">
          Chat app using Socket IO and Node JS
        </h2>
        <RoomInput
          room={room}
          setRoom={setRoom}
          joined={joined}
          handleJoin={handleJoin}
          handleExit={handleExit}
        />

        {room && joined === 1 && (
          <div>
            <h3 className="text-xl font-bold mb-4">Room Name: {room}</h3>
            <UsernameInput username={username} setUsername={setUsername} />
            <UserMessageInput
              username={username}
              message={message}
              setMessage={setMessage}
              handleSend={handleSend}
            />

            <ChatMessageList messages={messages} />
          </div>
        )}
      </div>
    </div>
  );
}

export default Chat;
