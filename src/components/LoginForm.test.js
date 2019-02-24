import React from "react";
import LoginForm from "./LoginForm";

describe("LoginForm", () => {
  it("renders correctly", () => {
    const wrapper = shallow(<LoginForm />);
    expect(wrapper).toMatchSnapshot();
  });
});
