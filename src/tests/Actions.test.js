import { addTask, removeTask } from "../actions/actions";

test("should setup remove task action object", () => {
  const action = removeTask("123abc");
  expect(action).toEqual({
    type: "REMOVE_TASK",
    id: "123abc"
  });
});

test("should setup add task action object with provided value", () => {
  const action = addTask("Walk the dog");
  expect(action).toEqual({
    type: "ADD_TASK",
    task: "Walk the dog",
    id: expect.any(String)
  });
});
