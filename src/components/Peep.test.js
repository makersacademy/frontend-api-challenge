import React from "react";
import Peep from "./Peep";

describe("Peep", () => {
  it("renders correctly", () => {
    const peepObject = {
      body: "chitter",
      id: 23,
      created_at: "",
      likes: [],
      updated_at: "",
      user: "test"
    };
    const wrapper = shallow(<Peep details={peepObject} />);
    expect(wrapper).toMatchSnapshot();
  });
});
