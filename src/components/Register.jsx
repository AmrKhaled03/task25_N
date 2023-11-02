// Register.js
import React, { useState } from "react";

function Register() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const handleRegister = () => {
    // Check if any of the fields are empty
    if (!email || !username || !password) {
      alert("Please enter all fields.");
      return;
    }
    const user = {
        email,
        username,
password,
        // Add other user properties here
      };
  
    // Check if the email is already registered
    if (localStorage.getItem(email)) {
        setError("Email already exists.");
        return;
      }

    // Save user data to localStorage as JSON
    localStorage.setItem(email, JSON.stringify(user));

    // Call the onRegister callback to handle login

    setEmail("");
    setUsername("");
    setPassword("");

    // Optionally, you can display a success message or navigate to a different page
    alert("Registration successful!");

  };

  return (
    <div>
      <h2>Register</h2>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
    <button onClick={handleRegister}>Register</button>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
}

export default Register;
