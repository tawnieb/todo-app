import { Todo } from "../components/Todo";
import { shallow } from "enzyme";
import React from "react";
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
configure({ adapter: new Adapter() });

describe("todo component", () => {
  const todo = shallow(<Todo />);
  it("should render", () => {
    expect(todo).toHaveLength(1);
  });
  it("should render the task", () => {
    const todo = shallow(<Todo task={"Walk the dog"} />);
    expect(todo.text()).toContain("Walk the dog");
  });
  it("should render a button", () => {
    const todo = shallow(<Todo />);
    expect(todo.find("button")).toHaveLength(1);
  });
  it("should dispatch a removeTask action with correct id", () => {
    // let isCalled = false;
    // let call;
    // const dispatch = action => {
    //   call = action;
    //   isCalled = true;
    // };
    const dispatch = jest.fn();
    const todo = shallow(<Todo dispatch={dispatch} id={1} />);
    todo.find("button").simulate("click");

    expect(dispatch).toHaveBeenCalledTimes(1);
    expect(dispatch).toHaveBeenCalledWith({
      type: "REMOVE_TASK",
      id: 1
    });
  });
});
