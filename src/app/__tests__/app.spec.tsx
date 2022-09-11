import renderer from "react-test-renderer";
import App from "../app";
import React from "react";

describe("app component", () => {
  it("has not changed", () => {
    const component = renderer.create(<App />);
    expect(component.toJSON()).toMatchSnapshot();
  });
});
