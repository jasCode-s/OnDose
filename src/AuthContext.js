import React, { createContext, useState } from 'react';

// Code adapted from https://www.bigbinary.com/books/learn-react-native/handling-authentication-state-in-react-native on April 1st, 2023 
// main goal is to handle authentication
const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const passValue = {isAuthenticated, setIsAuthenticated};

  return <AuthContext.Provider value={passValue}>{children}</AuthContext.Provider>;
};

export { AuthContext, AuthProvider };
