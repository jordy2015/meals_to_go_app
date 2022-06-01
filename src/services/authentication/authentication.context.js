import React, { useState, createContext } from "react";
import { loginRequest } from "./authentication.service";

export const AuthenticationContext = createContext();

export const AuthenticationContextProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState(null);
  const [error, serError] = useState(null);
  const onLogin = (email, password) => {
    setIsLoading(true);
    loginRequest(email, password)
      .then((userResult) => {
        console.log(userResult);
        setUser(userResult);
        setIsLoading(false);
      })
      .catch((e) => {
        console.log(e);
        setIsLoading(false);
        serError(e.toString());
      });
  };
  return (
    <AuthenticationContext.Provider
      value={{ isAuthenticated: !!user, user, isLoading, error, onLogin }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
};
