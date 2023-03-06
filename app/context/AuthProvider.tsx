import { useState } from "react";
import AuthContext from "./AuthContext";

export const AuthContextProvider = (props: any) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const logOutHandler = () => {
    setIsLoggedIn(false);
  };

  const logInHandler = () => {
    setIsLoggedIn(true);
  };

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn,
        logOut: logOutHandler,
        logIn: logInHandler,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};
