import React from "react";
import Logo from "./Logo";

describe("Logo", () => {
  it("renders correctly", () => {
    const wrapper = shallow(<Logo />);
    expect(wrapper).toMatchSnapshot();
  });

  it("renders correctly, again", () => {
    const wrapper = render(<Logo />);
    expect(wrapper).toMatchSnapshot();
  });

  it("renders the logo correctly", () => {
    const wrapper = mount(<Logo />);
    const text = wrapper
      .find("h1")
      .first()
      .text();
    expect(text).toEqual("Chitter");
  });
});
