export default function Reducer(state = {}, action) {
  switch (action.type) {
    case "RETURN": {
      console.log(action.payload);
    }
    default:
      return state;
  }
}
