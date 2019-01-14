import Header from "../components/Header";
import { shallow } from "enzyme";
import React from "react";
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
configure({ adapter: new Adapter() });

describe("header", () => {
  const header = shallow(<Header />);
  it("should render a header", () => {
    expect(header).toHaveLength(1);
  });

  it("should render a h1 element", () => {
    const h1 = header.find("h1");
    expect(h1).toHaveLength(1);
    expect(h1.text()).toMatch("ToDo App");
  });

  it("should render two navlinks, with the correct props", () => {
    const navlink = header.find("NavLink");
    expect(navlink).toHaveLength(2);
    expect(navlink.at(0).props().children).toEqual("HomePage");
    expect(navlink.at(0).props().to).toEqual("/");
    expect(navlink.at(1).props().children).toEqual("Help");
    expect(navlink.at(1).props().to).toEqual("/help");
  });
});
