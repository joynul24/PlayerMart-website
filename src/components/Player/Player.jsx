import PropTypes from "prop-types";

const Player = ({ player, handleChoosePlayer }) => {
  const {img, name, country, price, category, batting_hand } = player;
//   console.log(player);
  return (

    <div className="card border-2 border-gray-300 shadow-xl">
      <figure className="h-60 px-6 pt-6">
        <img
          src={img}
          alt="Shoes"
          className="rounded-2xl w-full h-full object-cover"
        />
      </figure>
      <div className="card-body space-y-4">
        <h2 className="flex gap-4 items-center font-bold"><i className="fa-solid fa-user"></i>{name}</h2>
        <div className="flex justify-between items-center opacity-70">
            <h3 className="flex gap-4 items-center"><i className="fa-solid fa-flag"></i>{country}</h3>
            <h3>{category}</h3>
        </div>
        <h3 className="font-bold">Rating</h3>
        <div className="flex justify-between items-center font-bold">
            <h3>Perfomance</h3>
            <h3 className="opacity-70">{batting_hand}</h3>
        </div>
        {/* button */}
        <div className="flex justify-between items-center">
            <h3 className="font-semibold">Price: ${price}</h3>
            <button 
            onClick={()=> handleChoosePlayer(player)}
            className="btn btn-outline btn-secondary">Choose Player</button>
        </div>
      </div>
    </div>

  );
};

Player.propTypes = {
  player: PropTypes.object.isRequired,
  handleChoosePlayer: PropTypes.func.isRequired,
};

export default Player;
