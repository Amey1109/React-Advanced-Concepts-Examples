import React, { useContext } from "react";
import { usersContext } from "./UsersContext";
import UsersCard from "./UsersCard";

var style = {
  root: {
    margin:"10px",
    display: "flex",
    justifyContent: "center",
    flexDirection : "column",
    alignItems :"center"
  },
  cardStyle: {
    margin: "10px",
    width: "300px",
  },
};
function UsersList() {
  const contextData = useContext(usersContext);
  return (
    <div style={style.root}>
      {contextData.map((item, index) => {
        return <UsersCard name = {item} />
      })}
    </div>
  );
}

export default UsersList;
