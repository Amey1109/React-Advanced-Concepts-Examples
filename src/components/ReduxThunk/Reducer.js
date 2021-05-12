import actions, { Actions } from "./actions";
const intialState = {
  count: 0,
};

export const Reducer = (state = intialState, action) => {
  switch (action.type) {
    case actions.INCREMENT_COUNTER: {
        return {
        count: action.payload,
      };
    }

    case actions.DECREMENT_COUNTER: {
      return {
        count: action.payload,
      };
    }

    case actions.RESET_COUNTER: {
      return {
        count: action.payload,
      };
    }

    default:
      return state;
  }
};
