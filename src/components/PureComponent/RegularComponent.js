import React, { Component } from "react";

class RegularComponent extends Component {
  render() {
    console.log(" RegularComponent: I Am Rendered !!!");
    return <div>RegularComponent name : {this.props.name}</div>;
  }
}

export default RegularComponent;
