// import { createStore } from "redux";
import uuid from "uuid";

// Action Creators
// Add Task
export const addTask = task => {
  return {
    type: "ADD_TASK",
    task,
    id: uuid()
  };
};

// Remove Task
export const removeTask = id => {
  return {
    type: "REMOVE_TASK",
    id
  };
};

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

// const state = {
//   928878787: "wash dishes",
//   287389273: "walk dog"
// };
