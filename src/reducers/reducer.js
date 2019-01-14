// Tasks Reducer
const initialState = {};

export default (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TASK":
      return { ...state, [action.id]: action.task };
    case "REMOVE_TASK":
      const newState = { ...state };
      delete newState[action.id];
      return newState;
    default:
      return state;
  }
};
