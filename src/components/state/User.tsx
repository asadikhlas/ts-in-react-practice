import { useState } from "react";

type AuthProps = {
  name: string;
  email: string;
};

const User = () => {
  const [user, setUser] = useState<AuthProps>({} as AuthProps);

  const handleLogin = () => {
    setUser({
      name: "Asad",
      email: "asad@asad.com",
    });
  };

  return (
    <div>
      <button onClick={handleLogin}>Login</button>
      <div>Your name is {user?.name}</div>
      <div>Your email is {user?.email}</div>
    </div>
  );
};

export default User;
