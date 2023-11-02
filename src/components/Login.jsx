import React, { useState, useEffect } from "react";

function Login({ onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    const loggedInUser = localStorage.getItem("loggedInUser");
    if (loggedInUser) {
      const { email, username } = JSON.parse(loggedInUser);
      onLogin(email, username);
    }
  });

  const handleLogin = () => {
    const userData = localStorage.getItem(email);

    if (!userData) {
      setError("User with this email does not exist.");
      return;
    }

    const user = JSON.parse(userData);

    if (password === user.password) {
      onLogin(email, user.username);
      localStorage.setItem("loggedInUser", JSON.stringify({ email, username: user.username }));
    } else {
      setError("Invalid email or password");
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
}

export default Login;
