import React, { Component, createRef } from "react";

class Ref extends Component {
  constructor(props) {
    super(props);

    this.inputRef = createRef();
  }

  componentDidMount() {
    this.inputRef.current.focus();
  }

  handleClick = () => {
    alert(this.inputRef.current.value);
  };

  render() {
    return (
      <div>
        <input type="text" ref={this.inputRef} />
        <button onClick={this.handleClick}>Click Me</button>
      </div>
    );
  }
}

export default Ref;
