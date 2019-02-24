import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

describe("App", () => {
  it("should be able to run tests", () => {
    expect(1 + 2).toEqual(3);
  });

  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
