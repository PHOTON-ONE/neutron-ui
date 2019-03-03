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
import Modal from "./index";
import ModalReadme from "./README.md";

// Testers
import Button from "../Button";

// Various actions
const onActions = actions({ onClick: "Click!" });

// Store
const store = new Store({
  open: false,
});

storiesOf("Modal", module)
  .addDecorator(withReadme(ModalReadme))
  .add("default", () => {
    // The component we are testing
    const component = (
      <Modal key="modal"
        open={store.get("open")}
        content="Super Content"
        title="Super Title"
        onDismiss={() => store.set({ open: !store.get("open") })}
        actions={[{content: "Action 01"}, {content: "Action 02", close: true}]}
        {...onActions}
      />
    );

    // Story for this component
    const story = (
      <State store={store}>
        {component}
        <Button key="open"onClick={() => store.set({ open: !store.get("open") })}>
          Open Modal!
        </Button>
      </State>
    );

    // Tests
    specs(() =>
      describe("Modal", function() {
        it("Should have the Super Content text in the content prop", function() {
          let output = mount(component);
          expect(output.props().content).toContain("Super Content");
        });
      }),
    );

    return story;
  });
