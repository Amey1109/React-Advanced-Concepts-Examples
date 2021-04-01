import React, { Component } from "react";
import counter from "./counter"

class HoverCounter extends Component {
  render() {
    const {count,handleCounter} = this.props;

    return (
      <div>
        <h1 onMouseOver={handleCounter}>Hovered {count} Times</h1>
      </div>
    );
  }
}

export default counter(HoverCounter);
