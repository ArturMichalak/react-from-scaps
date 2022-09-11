import renderer from "react-test-renderer";
import React from "react";
import Callback from "../auth-callback";

describe("callback component", () => {
  it("has not changed", () => {
    const component = renderer.create(<Callback />);
    expect(component.toJSON()).toMatchSnapshot();
  });
});
