function ChatMessage({ username, message }) {
  return (
    <div className="bg-gray-100 px-4 py-2 rounded-md">
      <p>
        <strong>{username} : </strong>
        {message}
      </p>
    </div>
  );
}

export default ChatMessage;
