import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "./Join.css";

const Join = () => {
  const [roomId, setRoomId] = useState("");
  const navigate = useNavigate();

  const handleJoin = () => {
    if (!roomId.trim()) return alert("Enter Room ID");
    navigate(`/room/${roomId}`);
  };

  return (
    <div className="join-page">
      <div className="join-card">
        <h1>Live Streaming</h1>
        <p>Enter Room ID to join</p>

        <input
          type="text"
          placeholder="Enter room name"
          value={roomId}
          onChange={(e) => setRoomId(e.target.value)}
        />

        <button onClick={handleJoin}>Join Room</button>
      </div>
    </div>
  );
};

export default Join;
