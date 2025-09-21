import { useState } from "react";
import { fetchUserData } from "../services/githubService";

const SearchBar = () => {
  const [username, setUsername] = useState("");
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handlesubmit = async (e) => {
    e.preventDefault();
    if (username.trim()) {
      // eslint-disable-next-line no-undef
      onSearch(username);
      setUsername(username);
    }

    setLoading(true);
    setError("");

    try {
      const data = await fetchUserData(username);
      setUser(data);
    } catch (error) {
      setError("Looks like we cant find the user", error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <>
      <form onSubmit={handlesubmit}>
        <input
          type="text"
          placeholder="Enter Git username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <button type="submit">{loading ? "Loading..." : "Search"}</button>
      </form>
      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
    </>
  );
};

export default SearchBar;
