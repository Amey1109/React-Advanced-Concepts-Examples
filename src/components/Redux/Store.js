import React from "react";
import { createStore } from "redux";
import { Provider } from "react-redux";
import Reducer from "./Reducer";
import UserDetails from "./UserDetails";

const state = {
  userDetails: [
    { name: "Amey" },
    { name: "Saurabh" },
    { name: "Sandesh" },
    { name: "Bhushan" },
  ],
};

const store = createStore(Reducer,state);
export default function Store() {
  return (
    <Provider store={store}>
      <UserDetails />
    </Provider>
  );
}
