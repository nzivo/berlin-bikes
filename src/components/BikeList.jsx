import React from "react";
import BikeDetail from "./BikeDetail";

function BikeList({ bikes }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {bikes.map((bike) => (
        <div key={bike.id} className="flex-grow">
          <BikeDetail bike={bike} />
        </div>
      ))}
    </div>
  );
}

export default BikeList;
