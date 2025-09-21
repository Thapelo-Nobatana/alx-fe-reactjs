import { useState } from "react";
import { searchUsers } from "../services/githubService";

function Search() {
  const [username, setUsername] = useState("");
  const [location, setLocation] = useState("");
  const [minRepos, setMinRepos] = useState("");
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setUsers([]);

    try {
      const results = await searchUsers({ username, location, minRepos });
      setUsers(results);
    } catch {
      setError("Looks like we can’t find any users 😕");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-xl mx-auto p-6">
      <h1 className="text-2xl font-bold text-center mb-6">
        GitHub User Search
      </h1>

      {/* Search Form */}
      <form
        onSubmit={handleSubmit}
        className="grid gap-4 bg-white shadow p-4 rounded-xl"
      >
        <input
          type="text"
          placeholder="Username (optional)"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="border p-2 rounded-md w-full"
        />
        <input
          type="text"
          placeholder="Location (e.g. South Africa)"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="border p-2 rounded-md w-full"
        />
        <input
          type="number"
          placeholder="Minimum Repositories"
          value={minRepos}
          onChange={(e) => setMinRepos(e.target.value)}
          className="border p-2 rounded-md w-full"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
        >
          Search
        </button>
      </form>

      {/* Results */}
      <div className="mt-6">
        {loading && <p className="text-center">Loading...</p>}
        {error && <p className="text-center text-red-600">{error}</p>}

        <div className="grid gap-4">
          {users.map((user) => (
            <div
              key={user.id}
              className="flex items-center gap-4 border p-4 rounded-md shadow"
            >
              <img
                src={user.avatar_url}
                alt={user.login}
                className="w-16 h-16 rounded-full"
              />
              <div>
                <h2 className="font-bold">{user.login}</h2>
                {user.location && <p>📍 {user.location}</p>}
                {user.public_repos !== undefined && (
                  <p>📦 {user.public_repos} Repositories</p>
                )}
                <a
                  href={user.html_url}
                  target="_blank"
                  rel="noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  View Profile
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Search;
