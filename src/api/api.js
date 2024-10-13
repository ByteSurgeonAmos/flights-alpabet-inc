import axios from "axios";

const API_KEY = "bdaaf6df2bmshdf0727fc340485bp17dd54jsn2e8ea6d6b34d";
const API_HOST = "sky-scrapper.p.rapidapi.com";

const axiosInstance = axios.create({
  headers: {
    "x-rapidapi-key": API_KEY,
    "x-rapidapi-host": API_HOST,
  },
});

export const getNearbyAirports = async (lat, lng, locale = "en-US") => {
  try {
    const response = await axiosInstance.get(
      "/api/v1/flights/getNearByAirports",
      {
        params: { lat, lng, locale },
      }
    );
    return response.data.airports;
  } catch (error) {
    console.error("Error fetching nearby airports:", error);
    throw error;
  }
};

export const searchAirports = async (query, locale = "en-US") => {
  try {
    const response = await axiosInstance.get("/api/v1/flights/searchAirports", {
      params: { query, locale },
    });
    return response.data.airports;
  } catch (error) {
    console.error("Error searching airports:", error);
    throw error;
  }
};

export const searchFlights = async (params) => {
  try {
    const response = await axiosInstance.get(
      "/api/v2/flights/searchFlightsWebComplete",
      { params }
    );
    return response.data;
  } catch (error) {
    console.error("Error searching flights:", error);
    throw error;
  }
};

// You can add more API functions here as needed

export default {
  getNearbyAirports,
  searchAirports,
  searchFlights,
};
