import axios from "axios";

const API_URL = "https://apiheya-sky-scrapper-v1.p.rapidapi.com/flights";

export const getFlightData = async (origin, destination) => {
  try {
    const response = await axios.get(API_URL, {
      params: { origin, destination },
      headers: {
        "X-RapidAPI-Key": import.meta.env.VITE_RAPIDAPI_KEY,
        "X-RapidAPI-Host": "apiheya-sky-scrapper-v1.p.rapidapi.com",
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching flight data:", error);
    throw error;
  }
};
