import { useContext } from "react";
import { UserContext } from "./useContext";

const User = () => {
  const userContext = useContext(UserContext);
  const handleLogin = () => {
    if (userContext) {
      userContext.setUser({
        name: "Asad",
        email: "asad@asad.com",
      });
    }
  };

  const handleLogout = () => {
    if (userContext) {
      userContext.setUser(null);
    }
  };

  return (
    <div>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogout}>Login</button>
      <div>Your name is {userContext?.user?.name}</div>
      <div>Your email is {userContext?.user?.email}</div>
    </div>
  );
};

export default User;
