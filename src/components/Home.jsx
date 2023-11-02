// src/components/Home.js
import React from "react";
import { Link } from "react-router-dom";
function Home() {
  return (
    <div className="container mt-5">
      <h2>Welcome to Your Application</h2>
      <p>
        This is the home page of your application. You can add content,
        information, or features specific to your application here.
      </p>
      <Link to="/register">Register</Link>
    </div>
  );
}

export default Home;
