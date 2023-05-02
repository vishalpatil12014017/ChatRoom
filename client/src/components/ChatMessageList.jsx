import ChatMessage from "./ChatMessage";

function ChatMessageList({ messages }) {
  return (
    <div className="space-y-2">
      {messages.length > 0 &&
        messages.map((message, index) => (
          <ChatMessage
            key={index}
            username={message.username}
            message={message.message}
          />
        ))}
    </div>
  );
}

export default ChatMessageList;
