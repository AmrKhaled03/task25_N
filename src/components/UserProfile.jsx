import React from "react";

function UserProfile({ email, username }) {
  return (
    <div>
      <h2>User Profile</h2>
      <p>Email: {email}</p>
      <p>Username: {username}</p>
    </div>
  );
}

export default UserProfile;
