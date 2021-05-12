import React from "react";
import { Provider } from "react-redux";
import Counter from "./Counter";
import store from "./Store";

function CounterEntry() {
  return (
    <div>
      <Provider store={store}>
        <Counter />
      </Provider>
    </div>
  );
}

export default CounterEntry;
