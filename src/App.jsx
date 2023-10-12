// App.js
import React, { useEffect, useState } from "react";
import axios from "axios";
import BikeList from "./components/BikeList";
import SearchForm from "./components/SearchForm";
import SearchResults from "./components/SearchResults";

const baseURL =
  "https://bikeindex.org:443/api/v3/search?page=1&per_page=10&location=Berlin&distance=10&stolenness=stolen";

function App() {
  const [bikes, setBikes] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchResults, setSearchResults] = useState([]);
  const [selectedBike, setSelectedBike] = useState(null);

  useEffect(() => {
    axios
      .get(`${baseURL}&page=${currentPage}`)
      .then((response) => {
        setBikes(response.data.bikes);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [currentPage]);

  const handleSearch = (query) => {
    const trimmedQuery = query.trim().toLowerCase();

    if (trimmedQuery !== "") {
      const matchedBikes = bikes.filter((bike) => {
        const lowerCaseTitle = bike.title ? bike.title.toLowerCase() : "";
        const lowerCaseDescription = bike.description
          ? bike.description.toLowerCase()
          : "";

        return (
          lowerCaseTitle.includes(trimmedQuery) ||
          lowerCaseDescription.includes(trimmedQuery)
        );
      });

      setSearchResults(matchedBikes);
      setSelectedBike(null);

      if (matchedBikes.length === 0) {
        alert("No Match Found");
      }
    } else {
      setSearchResults([]);
      setSelectedBike(null);
      window.location.reload(); // Reload the page when the search query is cleared
    }
  };

  const handleBikeSelect = (bike) => {
    setSelectedBike(bike);
  };

  return (
    <div className="text-white text-center pb-16">
      <div className="bg-emerald-800 py-6">
        <h1 className="text-4xl font-bold mb-8">Bike Theft Cases in Berlin</h1>
        <SearchForm onSearch={handleSearch} />
      </div>

      {selectedBike ? (
        <BikeList bikes={[selectedBike]} />
      ) : searchResults.length > 0 ? (
        <SearchResults
          results={searchResults}
          onBikeSelect={handleBikeSelect}
        />
      ) : (
        <BikeList bikes={bikes} onBikeSelect={handleBikeSelect} />
      )}

      <div className="flex justify-center mt-8">
        <button
          className="bg-emerald-500 text-white font-bold py-2 px-4 rounded-full mr-4"
          onClick={() => setCurrentPage((prev) => prev - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <button
          className="bg-emerald-800 text-white font-bold py-2 px-4 rounded-full"
          onClick={() => setCurrentPage((prev) => prev + 1)}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default App;
