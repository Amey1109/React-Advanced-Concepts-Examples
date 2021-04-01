import React, { Component } from "react";

export class Child extends Component {
  constructor(props) {
    super(props);

    this.state = {
      Data: "Hello I'm From Child",
    };
  }

  render() {
    const { getData } = this.props;
    return (
      <div>
        <button
          onClick={() => {
            getData(this.state.Data);
          }}
        >
          Change the Data
        </button>
      </div>
    );
  }
}

export default Child;
