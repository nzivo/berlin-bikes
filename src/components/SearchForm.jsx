import React, { useState } from "react";

const SearchForm = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = () => {
    onSearch(searchQuery);
  };

  return (
    <div className="flex justify-center mb-8">
      <input
        type="text"
        placeholder="Search..."
        className="bg-white text-emerald-500 px-4 py-2 rounded-full"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <button
        className="bg-white text-emerald-800 font-bold py-2 px-4 ml-2 rounded-full"
        onClick={handleSearch}
      >
        Search
      </button>
    </div>
  );
};

export default SearchForm;
