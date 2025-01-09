
const Selected = () => {
    return (
        <div>
            <div className="flex justify-between items-center">
        <h2 className="text-3xl font-bold">Selected Player (4/6)</h2>
        <div className="flex">
          <button 
          className="py-4 px-7">Available</button>

          <button 
          className="py-4 px-7">Selected (0)</button>
        </div>
      </div>
        </div>
    );
};

export default Selected;