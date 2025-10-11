import React, { useState } from "react";

const RegistrationForm = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const onChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    if (name === "username") setUsername(value);
    if (name === "email") setEmail(value);
    if (name === "password") setPassword(value);
    if (name === "confirmPassword") setConfirmPassword(value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!username) {
      console.log("Username is required");
    }
    if (!email) {
      console.log("Email is required");
    }
    if (!password) {
      console.log("Password is required");
    }
  };

  return (
    <>
      <h1>RegistrationForm</h1>
      <form action="submit" onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          placeholder="Username"
          onChange={onChange}
          value={username}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={onChange}
          value={email}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={onChange}
          value={password}
        />
        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
          onChange={onChange}
          value={confirmPassword}
        />
        <button type="submit">Register</button>
      </form>
    </>
  );
};

export default RegistrationForm;
