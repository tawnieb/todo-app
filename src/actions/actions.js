import uuid from "uuid";

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
