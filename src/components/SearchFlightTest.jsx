import React, { useState } from "react";
import axios from "axios";

const FlightSearchTest = () => {
  const [loading, setLoading] = useState(false);
  const [responseData, setResponseData] = useState(null);
  const [error, setError] = useState(null);

  const searchFlights = async () => {
    setLoading(true);
    setError(null);
    setResponseData(null);

    const options = {
      method: "GET",
      url: "https://sky-scrapper.p.rapidapi.com/api/v2/flights/searchFlightsWebComplete",
      params: {
        originSkyId: "LOND", // Example: London
        destinationSkyId: "NYCA", // Example: New York
        originEntityId: "27544008",
        destinationEntityId: "27537542",
        date: "2024-10-15", // Example: YYYY-MM-DD format
        returnDate: "2024-10-22", // Example return date
        cabinClass: "economy",
        adults: "1",
        sortBy: "best",
        currency: "USD",
        market: "en-US",
        countryCode: "US",
      },
      headers: {
        "x-rapidapi-key": "bdaaf6df2bmshdf0727fc340485bp17dd54jsn2e8ea6d6b34d", // Replace with your API key
        "x-rapidapi-host": "sky-scrapper.p.rapidapi.com",
      },
    };

    try {
      const response = await axios.request(options);
      setResponseData(response.data); // Store the successful response data
      console.log(response);
    } catch (error) {
      if (error.response) {
        setError({
          message: "Error response from server",
          data: error.response.data,
          status: error.response.status,
        });
      } else if (error.request) {
        setError({
          message: "No response received",
          request: error.request,
        });
      } else {
        setError({
          message: "Error setting up request",
          detail: error.message,
        });
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h1>Flight Search Test</h1>
      <button onClick={searchFlights} disabled={loading}>
        {loading ? "Searching..." : "Search Flights"}
      </button>

      {responseData && (
        <div>
          <h2>Results:</h2>
          <pre>{JSON.stringify(responseData, null, 2)}</pre>
        </div>
      )}

      {error && (
        <div style={{ color: "red" }}>
          <h2>Error:</h2>
          <p>{error.message}</p>
          {error.data && <pre>{JSON.stringify(error.data, null, 2)}</pre>}
          {error.status && <p>Status Code: {error.status}</p>}
        </div>
      )}
    </div>
  );
};

export default FlightSearchTest;
