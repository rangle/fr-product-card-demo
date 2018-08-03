import { configure } from '@storybook/react';
import { setOptions } from '@storybook/addon-options';
import '../src/ui-kit/index.css';

setOptions({
  name: 'Product Card',
  // name: 'Rangle.io Design System',
  url: '/',
  hierarchySeparator: /\//,
  hierarchyRootSeparator: /\|/,
  sortStoriesByKind: false, // Do not sort alphabetically
});

const storiesContexts = [
  require.context('../src/stories/primitives', true, /stories\.js$/),
  require.context('../src/stories/components', true, /stories\.js$/),
];

function loadStories() {
  storiesContexts.forEach(context => context.keys().forEach(context));
}

configure(loadStories, module);
