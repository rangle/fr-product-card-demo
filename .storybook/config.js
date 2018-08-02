import { configure } from '@storybook/react';
import '../src/ui-kit/index.css';

function loadStories() {
  const storiesContext = require.context(
    '../src/stories',
    true,
    /stories\.js$/,
  );
  storiesContext.keys().forEach(storiesContext);
}

configure(loadStories, module);
