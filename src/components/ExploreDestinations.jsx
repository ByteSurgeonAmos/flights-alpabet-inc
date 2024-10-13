import React from "react";
import { InfoIcon } from "lucide-react";

const ExploreDestinations = ({ currentLocation }) => {
  return (
    <div className="mt-10 w-full max-w-5xl">
      <div className="flex items-center mb-4">
        <h2 className="text-xl font-semibold text-gray-200 mr-2">
          Find cheap flights from {currentLocation} to anywhere
        </h2>
        <InfoIcon className="w-5 h-5 text-gray-400" />
      </div>

      <div className="flex space-x-2 mb-4">
        <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm">
          {currentLocation}
        </span>
        <span className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm">
          Nairobi
        </span>
        <span className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm">
          Samburu County
        </span>
        <span className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm">
          Meru
        </span>
      </div>

      <div className="relative">
        <div className="w-full h-64 bg-gray-800 rounded-lg overflow-hidden">
          <img src="/world.png" alt="world image" />
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <button className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm hover:bg-blue-700 transition duration-300">
            Explore destinations
          </button>
        </div>
      </div>
    </div>
  );
};

export default ExploreDestinations;
