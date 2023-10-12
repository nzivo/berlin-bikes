import React from "react";
import defaultBikeImage from "../assets/default-bike.jpg";

function BikeDetail({ bike }) {
  const imageUrl = bike.large_img || defaultBikeImage;

  return (
    <div className="max-w-md mx-auto bg-white rounded-xl overflow-hidden shadow-md my-4">
      <img
        className="w-full h-48 object-cover"
        src={imageUrl}
        alt={bike.title}
      />
      <div className="p-6">
        <h2 className="font-bold text-xl mb-2">{bike.title}</h2>
        <p className="text-gray-700 text-base mb-4">{bike.description}</p>
        <p className="text-gray-600 mb-2">
          Date of Theft:{" "}
          {new Date(bike.date_stolen * 1000).toLocaleDateString()}
        </p>
        <p className="text-gray-600 mb-2">
          Date Reported: {new Date(bike.created_at * 1000).toLocaleDateString()}
        </p>
        <p className="text-gray-600 mb-2">Location: {bike.stolen_location}</p>
        <div className="flex justify-end">
          <a
            href={bike.url}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-emerald-700 text-white font-bold py-2 px-4 rounded-full hover:bg-emerald-900"
          >
            View Details
          </a>
        </div>
      </div>
    </div>
  );
}

export default BikeDetail;
