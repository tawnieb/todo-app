import HelpPage from "../components/HelpPage";
import { shallow } from "enzyme";
import React from "react";
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
configure({ adapter: new Adapter() });

describe("help page", () => {
  const helppage = shallow(<HelpPage />);
  it("should render the help page", () => {
    expect(helppage).toHaveLength(1);
  });
  it("should render a p element", () => {
    const p = helppage.find("p");
    expect(p).toHaveLength(1);
  });
});
