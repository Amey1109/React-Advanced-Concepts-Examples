import ACTIONS from "./actions";
export default function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.ADD_USER:
      const insertedState = [...state, { name: action.payload }];
      return insertedState;
      break;

    case ACTIONS.DELETE_USER:
      const deletedState = [
        ...state.slice(0, action.payload),
        ...state.slice(action.payload + 1),
      ];
      return deletedState;
      break;
    default: {
      return state;
    }
  }
}
