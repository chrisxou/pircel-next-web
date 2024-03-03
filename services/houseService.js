import axios from 'axios';

const BASE_URL = 'http://localhost:8000'; // Replace with your actual API URL

export const getHouses = async (name) => {
  try {
    const response = await axios.get(`${BASE_URL}/houses`, {
      params: {name},
    });
    return response;
  } catch (error) {
    console.error('There was an error fetching the houses:', error);
    throw error;
  }
};
