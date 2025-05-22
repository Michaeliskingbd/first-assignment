// src/context/UserContext.js
import { createContext, useContext, useState } from "react";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [gender, setGender] = useState("");

  return (
    <UserContext.Provider value={{ gender, setGender }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
