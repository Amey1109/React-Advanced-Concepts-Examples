import React, { useReducer, useState } from "react";
import reducer from "./reducer";
import ACTIONS from "./actions";
import users from "./users.css";

function Users() {
  const [state, dispatch] = useReducer(reducer, []);
  const [user, setUser] = useState("");

  const handleClick = () => {
    dispatch({ type: ACTIONS.ADD_USER, payload: user });
  };

  const handleDelete = (index) => {
    dispatch({ type: ACTIONS.DELETE_USER, payload: index });
  };
  return (
    <div>
      <div className="input-container">
        <input
          type="text"
          onChange={(event) => {
            setUser(event.target.value);
          }}
        />
        <button
          onClick={() => {
            handleClick();
          }}
        >
          Add User
        </button>
      </div>
      {state.map((item, index) => {
        return (
          <div key={index} className="data-container">
            {item.name}
            <button
              onClick={() => {
                handleDelete(index);
              }}
            >
              Delete
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default Users;
