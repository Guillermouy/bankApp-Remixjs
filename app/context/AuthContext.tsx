import React from "react";

const AuthContext = React.createContext({
  isLoggedIn: false,
  logOut: () => {},
  logIn: () => {},
});

export default AuthContext;
