import React, { PureComponent } from "react";

export class PureCompo extends PureComponent {
  render() {
    console.log(" PureComponent : I Am Rendered !!!");

    return <div>Pure Component name : {this.props.name}</div>;
  }
}

export default PureCompo;
