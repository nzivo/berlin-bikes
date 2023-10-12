import React from "react";
import BikeList from "./BikeList";

const SearchResults = ({ results, onBikeSelect }) => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Search Results</h2>
      <BikeList bikes={results} onBikeSelect={onBikeSelect} />
    </div>
  );
};

export default SearchResults;
