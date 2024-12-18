import React from "react";

const LoggedIn = () => {
  const handleLogin = () => {
    console.log("User is logged in");
  };
  const handleLogout = () => {
    console.log("User is logged out");
  };

  return (
    <div>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogout}>Logout</button>
      <div>User is logged in/ logged out</div>
    </div>
  );
};

export default LoggedIn;
