import renderer from "react-test-renderer";
import Navigation from "@components/navigation";
import React from "react";

describe("navigation component", () => {
  it("has not changed", () => {
    const component = renderer.create(<Navigation />);
    expect(component.toJSON()).toMatchSnapshot();
  });
});
