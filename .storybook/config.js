import { addDecorator, configure } from '@storybook/react';
import { withOptions } from '@storybook/addon-options';
import {configure as enzymeConfigure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { describe, it } from 'storybook-addon-specifications'
import expect from 'expect'
import {ThemeProvider} from 'react-jss';
import theme from './theme';
import React from 'react';

window.describe = describe
window.it = it
window.expect = expect

enzymeConfigure({ adapter: new Adapter() });

const req = require.context('../src/components', true, /\.stories\.js$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

// Option defaults:
addDecorator(
    withOptions({
      /**
       * name to display in the top left corner
       * @type {String} 
       */
      name: 'Neutron-UI',
      /**
       * URL for name in top left corner to link to
       * @type {String} 
       */
      url: 'https://github.com/PHOTON-ONE/neutron-ui',
      /**
       * show story component as full screen
       * @type {Boolean} 
       */
      goFullScreen: false,
      /**
       * display panel that shows a list of stories
       * @type {Boolean} 
       */
      showStoriesPanel: true,
      /**
       * display panel that shows addon configurations
       * @type {Boolean} 
       */
      showAddonPanel: true,
      /**
       * display floating search box to search through stories
       * @type {Boolean} 
       */
      showSearchBox: false,
      /**
       * show addon panel as a vertical panel on the right
       * @type {Boolean} 
       */
      addonPanelInRight: true,
      /**
       * sorts stories
       * @type {Boolean} 
       */
      sortStoriesByKind: false,
      /**
       * regex for finding the hierarchy separator
       * @example:
       *   null - turn off hierarchy
       *   /\// - split by `/`
       *   /\./ - split by `.`
       *   /\/|\./ - split by `/` or `.`
       * @type {Regex} 
       */
      hierarchySeparator: null,
      /**
       * regex for finding the hierarchy root separator
       * @example:
       *   null - turn off multiple hierarchy roots
       *   /\|/ - split by `|`
       * @type {Regex} 
       */
      hierarchyRootSeparator: null,
      /**
       * sidebar tree animations
       * @type {Boolean} 
       */
      sidebarAnimations: true,
      /**
       * id to select an addon panel
       * @type {String} 
       */
      selectedAddonPanel: undefined, // The order of addons in the "Addon panel" is the same as you import them in 'addons.js'. The first panel will be opened by default as you run Storybook
      /**
       * enable/disable shortcuts
       * @type {Boolean} 
       */
      enableShortcuts: false, // true by default
    })
  );

  addDecorator(story => (<ThemeProvider theme={theme}>{story()}</ThemeProvider>));

configure(loadStories, module);