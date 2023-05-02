import React from "react";

function RoomInput({ room, setRoom, joined, handleJoin, handleExit }) {
  return (
    <div className="flex items-center mb-4">
      <label htmlFor="room" className="mr-2 font-bold">
        Room Name :
      </label>
      <input
        type="text"
        id="room"
        value={room}
        onChange={(e) => setRoom(e.target.value)}
        className="border border-gray-400 px-2 py-1 rounded-md flex-1"
        style={joined === 1 ? { pointerEvents: "none" } : null}
      />
      <button
        onClick={joined === 0 ? handleJoin : handleExit}
        className="bg-blue-500 text-white px-4 py-2 ml-2 rounded-md hover:bg-blue-600"
      >
        {joined === 0 ? "Join" : "Exit"}
      </button>
    </div>
  );
}

export default RoomInput;
