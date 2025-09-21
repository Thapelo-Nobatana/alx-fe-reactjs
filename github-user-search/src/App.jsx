import { useState } from "react";
import SearchBar from "./components/Search";
import UserCard from "./components/UserCard";
import { fetchUserData } from "./services/githubService";

function App() {
  const [user, setUser] = useState(null);
  const [error, setError] = useState("");

  const handleSearch = async (username) => {
    try {
      const data = await fetchUserData(username);
      setUser(data);
      setError("");
    } catch {
      setError("User not found");
      setUser(null);
    }
  };

  return (
    <div className="app">
      <h1>GitHub User Search</h1>
      <SearchBar onSearch={handleSearch} />
      {error && <p style={{ color: "red" }}>{error}</p>}
      <UserCard user={user} />
    </div>
  );
}

export default App;
