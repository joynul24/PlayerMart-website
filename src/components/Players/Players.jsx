import { useEffect } from "react";
import { useState } from "react";
import Player from "../Player/Player";
import PropTypes from "prop-types";
import './Players.css'


const Players = ({handleChoosePlayer, handleIsActiveStatus, isActive, playerData}) => {
  const [players, setPlayers] = useState([]);


  useEffect(() => {
    fetch("players.json")
      .then((res) => res.json())
      .then((data) => setPlayers(data));
  }, []);



  return (
    <div className="mt-8">
       <div className="flex justify-between items-center">
        <h2 className="text-3xl font-bold">Available Players</h2>
        <div className="flex">

          <button 
          onClick={()=> handleIsActiveStatus("available")}
          className={`${isActive.available?"active font-bold py-4 px-7" : "py-4 px-7"}`}>Available</button>

          <button 
          onClick={()=> handleIsActiveStatus("selected")}
          className={`${isActive.available?" py-4 px-7" : "active font-bold py-4 px-7"}`}>Selected ({playerData.length})</button>
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
  handleIsActiveStatus: PropTypes.func.isRequired,
  isActive: PropTypes.object.isRequired,
  playerData: PropTypes.array.isRequired,
}

export default Players;
