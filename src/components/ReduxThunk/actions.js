import {
  decrementCounterService,
  incrementCounterService,
  resetCounterService,
} from "./counterService";

const actions = {
  INCREMENT_COUNTER: "INCREMENT_COUNTER",
  DECREMENT_COUNTER: "DECREMENT_COUNTER",
  RESET_COUNTER: "RESET_COUNTER",
};

export const incrementCounterAction = () => async (dispatch, getState) => {
  
  let newCount = await incrementCounterService();
  dispatch({ type: actions.INCREMENT_COUNTER, payload: newCount });
};

export const decrementCounterAction = () => async (dispatch, getState) => {
  let newCount = await decrementCounterService();
  dispatch({
    type: actions.DECREMENT_COUNTER, payload : newCount
  });
};

export const resetCounterAction = () => async (dispatch, getState) => {
  let newCount = await resetCounterService();
  dispatch({ type: actions.RESET_COUNTER , payload: newCount });
};

export default actions;
