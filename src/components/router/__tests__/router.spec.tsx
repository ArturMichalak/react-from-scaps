import renderer from "react-test-renderer";
import Router from "../router";
import React from "react";

describe("router component", () => {
  it("has not changed", () => {
    const component = renderer.create(<Router />);
    expect(component.toJSON()).toMatchSnapshot();
  });
});
