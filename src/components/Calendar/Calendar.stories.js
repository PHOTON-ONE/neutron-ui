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
import Calendar from "./index";
import CalendarReadme from "./README.md";

const onActions = actions({ onClick: "Click!", onChange: (value) => (`Calendar date change: ${value}`) });

storiesOf("Calendar", module)
   .addDecorator(withReadme(CalendarReadme))
  .add(
    "default",
    () => {
      // Story
      const story = <Calendar initialDate="1997-11-21" {...onActions}/>;

      return story;
    },
  );
