import React from "react";
import { connect } from "react-redux";
import actions, {
  decrementCounterAction,
  resetCounterAction,
  incrementCounterAction,
} from "./actions";

function Counter(props) {
  return (
    <div>
      <button onClick={props.incrementCounterAction}>+</button>
      <h1>{props.count}</h1>
      <button onClick={props.decrementCounterAction}>-</button>
      <br></br>
      <button onClick={props.resetCounterAction}>Reset</button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    count: state.count,
  };
};

const mapDispatchToProps = {
  incrementCounterAction,
  decrementCounterAction,
  resetCounterAction,
};
export default connect(mapStateToProps, mapDispatchToProps)(Counter);
