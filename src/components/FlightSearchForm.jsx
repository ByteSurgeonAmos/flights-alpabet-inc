import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  ArrowLeftRight,
  ChevronDown,
  Calendar,
  User,
  MapPin,
  Plane,
  Search,
} from "lucide-react";

const FlightSearch = () => {
  const [tripType, setTripType] = useState("Round trip");
  const [passengers, setPassengers] = useState(1);
  const [flightClass, setFlightClass] = useState("Economy");
  const [origin, setOrigin] = useState("");
  const [destination, setDestination] = useState("");
  const [departureDate, setDepartureDate] = useState("");
  const [returnDate, setReturnDate] = useState("");
  const [showPassengersDropdown, setShowPassengersDropdown] = useState(false);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [flightResults, setFlightResults] = useState(null);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          try {
            const response = await axios.get(
              `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${position.coords.latitude}&longitude=${position.coords.longitude}&localityLanguage=en`
            );
            setOrigin(response.data.city || response.data.locality || "");
          } catch (error) {
            console.error("Error getting location:", error);
          }
        },
        (error) => {
          console.error("Error getting location:", error);
        }
      );
    }
  }, []);

  const searchAirport = async (query) => {
    try {
      const response = await axios.get(
        "https://sky-scrapper.p.rapidapi.com/api/v1/flights/searchAirport",
        {
          params: { query },
          headers: {
            "X-RapidAPI-Key":
              "bdaaf6df2bmshdf0727fc340485bp17dd54jsn2e8ea6d6b34d",
            "X-RapidAPI-Host": "sky-scrapper.p.rapidapi.com",
          },
        }
      );
      return response.data.data[0];
    } catch (error) {
      console.error("Error searching airport:", error);
      throw error;
    }
  };

  const searchFlights = async (originAirport, destinationAirport) => {
    try {
      const response = await axios.get(
        "https://sky-scrapper.p.rapidapi.com/api/v2/flights/searchFlightsWebComplete",
        {
          params: {
            originSkyId: originAirport.skyId,
            destinationSkyId: destinationAirport.skyId,
            originEntityId: originAirport.navigation.entityId,
            destinationEntityId: destinationAirport.navigation.entityId,
            date: departureDate,
            returnDate: tripType === "Round trip" ? returnDate : undefined,
            cabinClass: flightClass.toLowerCase(),
            adults: passengers.toString(),
            currency: "USD",
            market: "en-US",
            countryCode: "US",
            limit: 5,
          },
          headers: {
            "X-RapidAPI-Key":
              "bdaaf6df2bmshdf0727fc340485bp17dd54jsn2e8ea6d6b34d",
            "X-RapidAPI-Host": "sky-scrapper.p.rapidapi.com",
          },
        }
      );
      return response.data;
    } catch (error) {
      console.error("Error searching flights:", error);
      throw error;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setFlightResults(null);

    try {
      const originAirport = await searchAirport(origin);
      const destinationAirport = await searchAirport(destination);

      if (!originAirport || !destinationAirport) {
        throw new Error("Could not find valid airports for the given cities.");
      }

      const results = await searchFlights(originAirport, destinationAirport);
      const refinedResults = refineFlightResults(results);
      setFlightResults(refinedResults);
    } catch (error) {
      setError(
        error.message || "An error occurred while searching for flights."
      );
    } finally {
      setLoading(false);
    }
  };

  const refineFlightResults = (results) => {
    console.log("API response:", results);

    if (!results || !results.data) {
      console.error("Invalid results structure:", results);
      return [];
    }

    let itineraries = [];

    if (Array.isArray(results.data.itineraries)) {
      itineraries = results.data.itineraries;
    } else if (
      results.data.itineraries &&
      typeof results.data.itineraries === "object"
    ) {
      const possibleArrays = Object.values(results.data.itineraries).filter(
        Array.isArray
      );
      if (possibleArrays.length > 0) {
        itineraries = possibleArrays[0];
      }
    }

    if (itineraries.length === 0) {
      console.error("No itineraries found in the results");
      return [];
    }

    return itineraries.map((itinerary) => ({
      id: itinerary.id,
      price: itinerary.price.formatted,
      legs: itinerary.legs.map((leg) => ({
        origin: leg.origin.city,
        destination: leg.destination.city,
        departure: new Date(leg.departure).toLocaleString(),
        arrival: new Date(leg.arrival).toLocaleString(),
        duration: `${Math.floor(leg.durationInMinutes / 60)}h ${
          leg.durationInMinutes % 60
        }m`,
        carrier: leg.carriers.marketing[0].name,
      })),
    }));
  };

  const FlightResultCard = ({ flight }) => (
    <div className="bg-gray-800 p-4 rounded-lg mb-4 w-full">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-2 gap-2 sm:gap-4">
        <span className="text-lg font-bold">{flight.price}</span>
        <span className="text-sm">{flight.id}</span>
      </div>
      {flight.legs.map((leg, index) => (
        <div key={index} className="mb-2">
          <div className="flex justify-between text-sm">
            <span>{leg.carrier}</span>
            <span>{leg.duration}</span>
          </div>
          <div className="flex flex-col sm:flex-row justify-between text-xs text-gray-400">
            <span>
              {leg.origin} → {leg.destination}
            </span>
            <span>
              {leg.departure} - {leg.arrival}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
  return (
    <div className="bg-gray-900 p-4 sm:p-6 rounded-lg shadow-lg w-full max-w-2xl mx-auto">
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col sm:flex-row justify-between mb-4 gap-2 sm:gap-4">
          <div className="relative w-full sm:w-auto">
            <button
              type="button"
              className="bg-gray-800 text-white px-4 py-2 rounded-full flex items-center justify-center w-full sm:w-auto"
              onClick={() =>
                setTripType(
                  tripType === "Round trip" ? "One way" : "Round trip"
                )
              }
            >
              {tripType === "Round trip" ? (
                <ArrowLeftRight className="w-4 h-4 mr-2" />
              ) : (
                <Plane className="w-4 h-4 mr-2" />
              )}
              {tripType} <ChevronDown className="w-4 h-4 ml-2" />
            </button>
          </div>
          <div className="relative w-full sm:w-auto">
            <button
              type="button"
              className="bg-gray-800 text-white px-4 py-2 rounded-full flex items-center justify-center w-full sm:w-auto"
              onClick={() => setShowPassengersDropdown(!showPassengersDropdown)}
            >
              <User className="w-4 h-4 mr-2" /> {passengers}{" "}
              <ChevronDown className="w-4 h-4 ml-2" />
            </button>
            {showPassengersDropdown && (
              <div className="absolute top-full left-0 mt-1 bg-gray-800 rounded-md shadow-lg z-10 w-full sm:w-auto">
                {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
                  <button
                    key={num}
                    type="button"
                    className="block w-full text-left px-4 py-2 text-white hover:bg-gray-700"
                    onClick={() => {
                      setPassengers(num);
                      setShowPassengersDropdown(false);
                    }}
                  >
                    {num}
                  </button>
                ))}
              </div>
            )}
          </div>
          <button
            type="button"
            className="bg-gray-800 text-white px-4 py-2 rounded-full flex items-center justify-center w-full sm:w-auto"
            onClick={() =>
              setFlightClass((prev) => {
                const classes = ["Economy", "Business", "First"];
                const currentIndex = classes.indexOf(prev);
                return classes[(currentIndex + 1) % classes.length];
              })
            }
          >
            {flightClass} <ChevronDown className="w-4 h-4 ml-2" />
          </button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
          <div className="bg-gray-800 rounded-md flex items-center p-2">
            <MapPin className="w-5 h-5 text-gray-400 mr-2 flex-shrink-0" />
            <input
              type="text"
              value={origin}
              onChange={(e) => setOrigin(e.target.value)}
              placeholder="From"
              className="bg-transparent text-white placeholder-gray-400 focus:outline-none w-full"
            />
          </div>
          <div className="bg-gray-800 rounded-md flex items-center p-2">
            <MapPin className="w-5 h-5 text-gray-400 mr-2 flex-shrink-0" />
            <input
              type="text"
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              placeholder="To"
              className="bg-transparent text-white placeholder-gray-400 focus:outline-none w-full"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
          <div className="bg-gray-800 rounded-md flex flex-col p-2">
            <label
              htmlFor="departureDate"
              className="text-gray-400 text-sm mb-1"
            >
              Departure
            </label>
            <div className="flex items-center">
              <Calendar className="w-5 h-5 text-gray-400 mr-2 flex-shrink-0" />
              <input
                id="departureDate"
                type="date"
                value={departureDate}
                onChange={(e) => setDepartureDate(e.target.value)}
                className="bg-transparent text-white focus:outline-none w-full"
                placeholder="Select date"
              />
            </div>
          </div>
          {tripType === "Round trip" && (
            <div className="bg-gray-800 rounded-md flex flex-col p-2">
              <label
                htmlFor="returnDate"
                className="text-gray-400 text-sm mb-1"
              >
                Return
              </label>
              <div className="flex items-center">
                <Calendar className="w-5 h-5 text-gray-400 mr-2 flex-shrink-0" />
                <input
                  id="returnDate"
                  type="date"
                  value={returnDate}
                  onChange={(e) => setReturnDate(e.target.value)}
                  className="bg-transparent text-white focus:outline-none w-full"
                  placeholder="Select date"
                />
              </div>
            </div>
          )}
        </div>
        <div className="flex justify-center">
          <button
            type="submit"
            className="bg-blue-600 flex gap-3 text-white px-8 py-3 rounded-full hover:bg-blue-700 focus:outline-none shadow-lg disabled:opacity-50 w-full sm:w-auto"
            disabled={loading}
          >
            <Search /> {loading ? "Searching..." : "Explore"}
          </button>
        </div>
      </form>
      {error && <div className="mt-4 text-red-500 text-center">{error}</div>}
      {flightResults && flightResults.length > 0 && (
        <div className="mt-6 text-white">
          <h2 className="text-xl font-bold mb-2 text-center sm:text-left">
            Flight Results:
          </h2>
          <div className="space-y-4">
            {flightResults.map((flight) => (
              <FlightResultCard key={flight.id} flight={flight} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default FlightSearch;
