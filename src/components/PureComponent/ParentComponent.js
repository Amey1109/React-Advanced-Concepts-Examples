import React, { Component } from "react";
import PureCompo from "./PureCompo";
import RegularComponent from "./RegularComponent";
class ParentComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Amey",
      inputName: "",
    };
  }

  //   componentDidMount() {
  //     setInterval(() => {
  //       this.setState({ name: "Amey" });
  //     }, 2000);
  //   }

  render() {
      console.log("*********Parent Component***********")
    return (
      <div>

        <input
          type="text"
          value={this.state.inputName}
          onChange={(e) => {
            this.setState({ inputName: e.target.value });
          }}
        />
        <h1>{this.state.name}</h1>

        <button
          onClick={() => {
            console.log("Hello");
            this.setState({ name: this.state.inputName });
          }}
        >
          {" "}
          Change Name
        </button>

        <RegularComponent name={this.state.name} />
        <PureCompo name={this.state.name} />
      </div>
    );
  }
}

export default ParentComponent;
