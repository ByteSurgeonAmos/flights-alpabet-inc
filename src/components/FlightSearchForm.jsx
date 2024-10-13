import React, { useState, useEffect } from "react";
import {
  ArrowLeftRight,
  ChevronDown,
  Calendar,
  User,
  MapPin,
  Plane,
  MoreHorizontal,
} from "lucide-react";

const FlightSearchForm = ({ currentLocation }) => {
  const [tripType, setTripType] = useState("Round trip");
  const [passengers, setPassengers] = useState(1);
  const [flightClass, setFlightClass] = useState("Economy");
  const [showTripTypeDropdown, setShowTripTypeDropdown] = useState(false);
  const [showPassengersDropdown, setShowPassengersDropdown] = useState(false);
  const [showClassDropdown, setShowClassDropdown] = useState(false);

  const tripTypes = [
    { type: "Round trip", icon: <ArrowLeftRight className="w-4 h-4 mr-2" /> },
    { type: "One way", icon: <Plane className="w-4 h-4 mr-2" /> },
    { type: "Multi-city", icon: <MoreHorizontal className="w-4 h-4 mr-2" /> },
  ];
  const flightClasses = ["Economy", "Premium economy", "Business", "First"];

  return (
    <div className="bg-gray-800 p-4 rounded-lg shadow-lg w-full max-w-4xl relative">
      <div className="flex justify-between items-center mb-4">
        <div className="relative">
          <button
            className="bg-gray-700 text-white px-3 py-1 rounded-full flex items-center"
            onClick={() => setShowTripTypeDropdown(!showTripTypeDropdown)}
          >
            {tripTypes.find((t) => t.type === tripType).icon}
            {tripType} <ChevronDown className="w-4 h-4 ml-1" />
          </button>
          {showTripTypeDropdown && (
            <div className="absolute top-full left-0 mt-1 bg-gray-700 rounded-md shadow-lg z-10">
              {tripTypes.map(({ type }) => (
                <button
                  key={type}
                  className="block w-full text-left px-4 py-2 text-white hover:bg-gray-600  items-center"
                  onClick={() => {
                    setTripType(type);
                    setShowTripTypeDropdown(false);
                  }}
                >
                  {type}
                </button>
              ))}
            </div>
          )}
        </div>
        <div className="flex space-x-2">
          <div className="relative">
            <button
              className="bg-gray-700 text-white px-3 py-1 rounded-full flex items-center"
              onClick={() => setShowPassengersDropdown(!showPassengersDropdown)}
            >
              <User className="w-4 h-4 mr-1" /> {passengers}{" "}
              <ChevronDown className="w-4 h-4 ml-1" />
            </button>
            {showPassengersDropdown && (
              <div className="absolute top-full right-0 mt-1 bg-gray-700 rounded-md shadow-lg z-10">
                {[1, 2, 3, 4, 5].map((num) => (
                  <button
                    key={num}
                    className="block w-full text-left px-4 py-2 text-white hover:bg-gray-600"
                    onClick={() => {
                      setPassengers(num);
                      setShowPassengersDropdown(false);
                    }}
                  >
                    {num}
                    {/* {num} {num === 1 ? "passenger" : "passengers"} */}
                  </button>
                ))}
              </div>
            )}
          </div>
          <div className="relative">
            <button
              className="bg-gray-700 text-white px-3 py-1 rounded-full flex items-center"
              onClick={() => setShowClassDropdown(!showClassDropdown)}
            >
              {flightClass} <ChevronDown className="w-4 h-4 ml-1" />
            </button>
            {showClassDropdown && (
              <div className="absolute top-full right-0 mt-1 bg-gray-700 rounded-md shadow-lg z-10">
                {flightClasses.map((cls) => (
                  <button
                    key={cls}
                    className="block w-full text-left px-4 py-2 text-white hover:bg-gray-600"
                    onClick={() => {
                      setFlightClass(cls);
                      setShowClassDropdown(false);
                    }}
                  >
                    {cls}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-4">
        <div className="bg-gray-700 rounded-md flex items-center p-2">
          <MapPin className="w-5 h-5 text-gray-400 mr-2" />
          <input
            type="text"
            placeholder={currentLocation}
            className="bg-transparent text-white placeholder-gray-400 focus:outline-none w-full"
          />
        </div>
        <div className="bg-gray-700 rounded-md flex items-center p-2">
          <MapPin className="w-5 h-5 text-gray-400 mr-2" />
          <input
            type="text"
            placeholder="Where to?"
            className="bg-transparent text-white placeholder-gray-400 focus:outline-none w-full"
          />
        </div>
      </div>

      <div className="bg-gray-700 rounded-md flex items-center p-2 mb-8">
        <Calendar className="w-5 h-5 text-gray-400 mr-2" />
        <input
          type="text"
          placeholder="Departure"
          className="bg-transparent text-white placeholder-gray-400 focus:outline-none w-1/2"
        />
        <div className="border-r border-gray-600 h-6 mx-2"></div>
        <input
          type="text"
          placeholder="Return"
          className="bg-transparent text-white placeholder-gray-400 focus:outline-none w-1/2"
        />
      </div>

      <div className="absolute bottom-0 left-0 right-0 flex justify-center">
        <button
          type="submit"
          className="bg-blue-500 text-white px-8 py-3 rounded-full hover:bg-blue-600 focus:outline-none transform translate-y-1/2 shadow-lg"
        >
          Explore
        </button>
      </div>
    </div>
  );
};

export default FlightSearchForm;
