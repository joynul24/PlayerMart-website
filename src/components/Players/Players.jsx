import { useEffect } from "react";
import { useState } from "react";

const players = () => {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    fetch('players.json')
    .then(res => res.json())
    .then(data => setPlayers(data))
  },[])

  return (
    <div className="mt-20">
      <div className="flex justify-between items-center">
        <h3 className="text-3xl font-bold">Available Players {players.length}</h3>
        <div>
            <button className="py-4 px-7 font-bold">Available</button>
            <button className="py-4 px-7 font-bold">Selected (0)</button>
        </div>
      </div>
    </div>
  );
};



export default players;
