import { useEffect } from "react";
import { useState } from "react";
import Player from "../Player/Player";

const Players = () => {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    fetch("players.json")
      .then((res) => res.json())
      .then((data) => setPlayers(data));
  }, []);

  return (
    <div className="mt-8">
      <div className="flex justify-between items-center">
        <h2>Available Players</h2>
        <div className="flex">
          <button className="py-4 px-7">Available</button>
          <button className="py-4 px-7">Selected (0)</button>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 p-4 lg:p-0">
        {players.map((player) => (
          <Player key={player.id} player={player}></Player>
        ))}
      </div>
    </div>
  );
};

export default Players;
