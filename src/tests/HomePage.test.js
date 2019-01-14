import HomePage from "../components/HomePage";
import { shallow } from "enzyme";
import React from "react";
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
configure({ adapter: new Adapter() });

jest.mock("../components/TodoList", () => {
  const TodoList = () => null;
  return TodoList;
});

describe("home page", () => {
  const homepage = shallow(<HomePage />);
  it("should render the homepage", () => {
    expect(homepage).toHaveLength(1);
  });
  it("should render a p element", () => {
    const p = homepage.find("p");
    expect(p).toHaveLength(1);
  });
  it("should render the todolist component", () => {
    const todolist = homepage.find("TodoList");
    expect(todolist).toHaveLength(1);
  });
});
