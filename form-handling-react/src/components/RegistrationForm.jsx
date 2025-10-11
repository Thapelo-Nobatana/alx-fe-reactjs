import React, { useState } from "react";

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const onChange = (e) => {
    e.preventDefault();
    setFormData({ ...formData, [e.target.name]: e.target.value });
    console.log(formData);
  };

  return (
    <>
      <h1>RegistrationForm</h1>
      <form action="submit">
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
          value={formData.confirmPassword}
        />
        <button type="submit">Register</button>
      </form>
    </>
  );
};

export default RegistrationForm;
