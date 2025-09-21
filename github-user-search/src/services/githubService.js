import axios from "axios";
import { useState } from "react";

const BASE_URL = "https://api.github.com/users";
const TOKEN = import.meta.env.VITE_APP_GITHUB_API_KEY;

export const fetchUserData = async (username) => {
  const [loading, setLoading] = useState(false);
  try {
    const response = await axios.get(`${BASE_URL}/${username}`, {
      headers: TOKEN ? { Authorization: `token ${TOKEN}` } : {},
    });

    return response.data;
  } catch (error) {
    console.error("Looks like we cant find the user:", error);
    throw error;
  }
};
