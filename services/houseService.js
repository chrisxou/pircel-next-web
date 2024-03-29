import axios from "axios";

const BASE_URL_PRIMARY = process.env.NEXT_PUBLIC_NODE_SERVER;
const BASE_URL_FALLBACK = process.env.NEXT_PUBLIC_PIRCEL_SERVER;

export const getHouses = async (name) => {
  try {
    const response = await axios.get(`${BASE_URL_PRIMARY}/houses`, {
      params: { name },
    });
    return response;
  } catch (error) {
    console.error("Primary API failed. Trying fallback API...");
    try {
      const response = await axios.get(`${BASE_URL_FALLBACK}/houses`, {
        params: { name },
      });
      return response;
    } catch (error) {
      console.error("Both APIs failed:", error);
      throw error;
    }
  }
};
