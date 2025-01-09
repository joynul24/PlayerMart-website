import PropTypes from "prop-types";
import Details from "../Details/Details";

const Selected = ({handleIsActiveStatus,isActive, playerData, handleDeleteDetails}) => {
 

    return (
        <div>
         <div className="flex justify-between items-center">
        <h2 className="text-3xl font-bold">Selected Player ({playerData.length})</h2>
        <div className="flex">

          <button 
          onClick={()=> handleIsActiveStatus("available")}
          className={`${isActive.available?" active py-4 px-7" : "py-4 px-7"}`}>Available</button>

          <button
          onClick={()=> handleIsActiveStatus("selected")} 
          className={`${isActive.available?" py-4 px-7" : "active font-bold py-4 px-7"}`}>Selected ({playerData.length})</button>
        </div>
         </div>
         {/* players maping */}
         <div>
            {
              playerData.map((player, idx) => <Details key={idx} player={player} handleDeleteDetails={handleDeleteDetails}></Details>)
            }
         </div>
          <div className="flex mt-3">
          <p className="border-2 border-black p-2 rounded-2xl"><button 
          className="btn bg-yellow-300">Add More Player</button></p>
          </div>
        </div>
    );
};

Selected.propTypes = {
  handleIsActiveStatus: PropTypes.func.isRequired,
  isActive: PropTypes.object.isRequired,
  playerData: PropTypes.array.isRequired,
  handleDeleteDetails: PropTypes.func.isRequired,
}

export default Selected;