import React, { Component } from "react";
import { DataContext } from "./ContextProvider";

class ContextUser extends Component {
  render() {
    return (
      <div>
        {this.context.userDetails.map((item) => (
          <h1>{item.Name}</h1>
        ))}
      </div>
    );
  }
}

ContextUser.contextType = DataContext;
export default ContextUser;
