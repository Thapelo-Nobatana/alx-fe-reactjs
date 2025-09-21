import { useState } from "react";

const SearchBar = () => {
  const [username, setUsername] = useState("");

  const handlesubmit = (e) => {
    e.preventDefault();
    if (username.trim()) {
      // eslint-disable-next-line no-undef
      onSearch(username);
      setUsername(username);
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
        <button type="submit">Search</button>
      </form>
    </>
  );
};

export default SearchBar;
