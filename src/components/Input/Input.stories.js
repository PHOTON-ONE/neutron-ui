import React from "react";

// Stories
import { storiesOf } from "@storybook/react";
import { actions } from "@storybook/addon-actions/dist/preview";

// Documentation
import { withReadme, withDocs } from "storybook-readme";

// Testing
import { specs, describe, it } from "storybook-addon-specifications";
import { mount } from "enzyme";
import expect from "expect";

// Store
import { State, Store } from "@sambego/storybook-state";

// Component
import Input from "./index";
import InputReadme from "./README.md";

// Various actions
const onActions = actions({ onClick: "Click!" });

// Store
const store = new Store({
  open: true,
});

storiesOf("Input", module)
  .addDecorator(withReadme(InputReadme))
  .add("default", () => {
    // The component we are testing
    const component = (
      <Input 
        name="testInput"
        type="text"
        placeholder="Gradient border focus fun"
      />
    );

    // Story for this component
    const story = (
      <State store={store}>
        {component}
      </State>
    );

    // Tests
    specs(() =>
      describe("Input", function() {
        it("Should have the Super Content text in the content prop", function() {
          let output = mount(component);
          expect(output.props().content).toContain("Super Content");
        });
      }),
    );

    return story;
  });
