import axios from "axios";

const BASE_URL = "https://api.github.com/search/users?q";

// Search users with advanced filters
export const searchUsers = async ({ username, location, minRepos }) => {
  try {
    let query = "";

    if (username) query += `${username} in:login `;
    if (location) query += `location:${location} `;
    if (minRepos) query += `repos:>=${minRepos}`;

    const searchResponse = await axios.get(
      `${BASE_URL}/search/users?q=${encodeURIComponent(query)}`
    );

    const users = searchResponse.data.items;

    // Fetch additional details for each user
    const detailedUsers = await Promise.all(
      users.map(async (user) => {
        const details = await axios.get(`${BASE_URL}/users/${user.login}`);
        return details.data;
      })
    );

    return detailedUsers;
  } catch (error) {
    console.error("Error fetching users:", error);
    throw error;
  }
};
