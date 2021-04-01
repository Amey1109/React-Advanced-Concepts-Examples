import React from "react";

const counter = (OriginalComponet) => {
  class NewComponent extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        count: 0,
      };
    }

    handleCounter=()=> {
      this.setState({ count: this.state.count + 1 });
    }

    render() {
      return (
        <OriginalComponet
          count={this.state.count}
          handleCounter={this.handleCounter}
        />
      );
    }
  }

  return NewComponent;
};

export default counter;
