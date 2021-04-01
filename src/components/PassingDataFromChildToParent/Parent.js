import React, { Component } from "react";
import Child from "./Child";

export class Parent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      Data: " I Came From Parent",
    };
  }

  getData = (incomingData) => {
    this.setState({ Data: incomingData });
  };

  render() {
    const { Data } = this.state;
    return (
      <div>
        <h1>{Data}</h1>
        <Child getData={this.getData} />
      </div>
    );
  }
}

export default Parent;
