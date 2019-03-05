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

// Component
import Button from "./index";
import ButtonReadme from "./README.md";

const onActions = actions({ onClick: "Click!" });

storiesOf("Button", module)
   .addDecorator(withReadme(ButtonReadme))
  .add(
    "default",
    () => {
      // Story
      const story = <Button variant="contained" color="primary" {...onActions}>Hello World</Button>;

      // Testing
      specs(() =>
        describe("Button", function() {
          it("Should have the Hello World text in the children prop", function() {
            let output = mount(story);
            expect(output.props().children).toContain("Hello World");
          });
        }),
      );

      return story;
    },
  )
  .add("with some emoji", () => (
    <Button>
      <span role="img" aria-label="so cool" {...onActions}>
        😀 😎 👍 💯
      </span>
    </Button>
  ));
