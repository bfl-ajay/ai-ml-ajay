import axios from "axios";

const API_URL = "http://localhost:8000";

export const analyzeEmotions = async (text) => {
  try {
    const response = await axios.post(`${API_URL}/analyze`, { content: text });
    return response.data;
  } catch (error) {
    console.error("Error during API call:", error);
    throw error;
  }
};
