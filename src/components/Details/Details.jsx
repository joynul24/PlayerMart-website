import PropTypes from "prop-types";

const Details = ({player, handleDeleteDetails}) => {
    const {id, img, name, batting_hand} = player;

    return (
        <div>
            <div className="p-6 flex justify-between items-center">
                <div className="flex items-center gap-6">
                    <img className="w-[80px] h-[80px] rounded-2xl" src={img} alt="" />
                    <div>
                        <h3 className="text-2xl font-semibold">{name}</h3>
                        <p className="opacity-70 mt-3">{batting_hand}</p>
                    </div>
                </div>

                <button
                onClick={()=> handleDeleteDetails(id)}
                ><i className="text-3xl text-red-400 fa-solid fa-trash"></i></button>
            </div>
        </div>
    );
};

Details.propTypes = {
    player: PropTypes.object.isRequired,
    handleDeleteDetails: PropTypes.func.isRequired,
}

export default Details;