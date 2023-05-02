import React from "react";

function UsernameInput({ username, setUsername }) {
  return (
    <div className="flex items-center mb-4">
      <label htmlFor="username" className="mr-2 font-bold">
        Username :
      </label>
      <input
        type="text"
        id="username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="border border-gray-400 px-2 py-1 rounded-md flex-1"
      />
    </div>
  );
}

export default UsernameInput;
