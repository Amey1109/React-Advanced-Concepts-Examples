import React, { Component, createContext } from "react";

export const DataContext = createContext();

class ContextProvider extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userDetails: [{ Name: "Amey" }, { Name: "Saurabh" }, { Name: "Sandesh" }],
    };
  }

  render() {
    return (
      <DataContext.Provider value={{ userDetails: this.state.userDetails }}>
        {this.props.children}
      </DataContext.Provider>
    );
  }
}

export default ContextProvider;
