import React, { useState, createContext } from "react";
import { Provider } from "react-redux";
import UsersList from "./UsersList";

export const usersContext = createContext();
function UsersContext() {
  const [users, setUsers] = useState([
    "Amey",
    "Sandesh",
    "Saurabh",
    "Bhushan",
    "Soham",
  ]);
  return (
    <div>
      <usersContext.Provider value={users}>
        <UsersList />
      </usersContext.Provider>
    </div>
  );
}

export default UsersContext;
