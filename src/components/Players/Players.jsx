import { useEffect } from "react";
import { useState } from "react";
import Player from "../Player/Player";
import PropTypes from "prop-types";

const Players = ({handleChoosePlayer}) => {
  const [players, setPlayers] = useState([]);


  useEffect(() => {
    fetch("players.json")
      .then((res) => res.json())
      .then((data) => setPlayers(data));
  }, []);



  return (
    <div className="mt-8">
      <div className="flex justify-between items-center mt-7">
        <h2 className="text-3xl font-bold">Available Players</h2>
        <div className="flex">
          <button 
          className="py-4 px-7">Available</button>

          <button
          className="py-4 px-7">Selected (0)</button>
        </div>
        </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 p-4 lg:p-0">
        {players.map((player) => (
          <Player
           key={player.id}
           player={player}
           handleChoosePlayer={handleChoosePlayer}
           ></Player>
        ))}
      </div>
    </div>
  );
};

Players.propTypes = {
  handleChoosePlayer: PropTypes.func.isRequired,
}

export default Players;
