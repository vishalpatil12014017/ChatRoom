function UserMessageInput({username,message,setMessage,handleSend}) {
  return (
    <div
      className="flex items-center mb-4"
      style={username === "" ? { display: "none" } : null}
    >
      <label htmlFor="message" className="mr-2 font-bold">
        Message :
      </label>
      <input
        type="text"
        id="message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        className="border border-gray-400 px-2 py-1 rounded-md flex-1"
      />
      <button
        onClick={handleSend}
        className="bg-blue-500 text-white px-4 py-2 ml-2 rounded-md hover:bg-blue-600 disabled:opacity-50 disabled:bg-gray-400 disabled:cursor-not-allowed"
        disabled={message === ""}
      >
        Send
      </button>
    </div>
  );
}

export default UserMessageInput;
