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
import NavTile from "./index";
import NavTileReadme from "./README.md";

const onActions = actions({ onClick: "The Tile was clicked!", onMouseEnter: "Mouse Entered!"});

storiesOf("NavTile", module)
  .addDecorator(withReadme(NavTileReadme))
  .add(
    "default",
    () => {
      // Story
      const story = <NavTile title="Super Tile" description="This is my super tile!" image="https://www.gstatic.com/mobilesdk/160505_mobilesdk/discoverycards/2x/auth.png" {...onActions} />;


      return story;
    }
  );