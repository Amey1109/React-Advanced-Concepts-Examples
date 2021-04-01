import React, { Component } from "react";
import { connect } from "react-redux";

class UserDetails extends Component {
  render() {
    const { userDetails } = this.props.Data;
    const{test} = this.props
    return (
      <div>
        <button onClick={()=>{test("Hello Reducer")}}>Click Me</button>
        {userDetails.map((item) => (
          <h1>{item.name}</h1>
        ))}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    Data: state,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    test: (val) => dispatch({ type: "RETURN", payload: val }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserDetails);
