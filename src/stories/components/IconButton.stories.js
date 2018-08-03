import React from 'react';
import { storiesOf } from '@storybook/react';

import { IconButton } from '../../ui-kit';

storiesOf('Components|IconButton', module).add('with SVG icon', () => (
  <div className="m-3">
    <IconButton className="mr-3">
      <svg viewBox="0 0 24 24" width="16" height="16">
        <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z " />
      </svg>
    </IconButton>
    <IconButton className="mr-3">
      <svg viewBox="0 0 24 24" width="16" height="16">
        <path d="M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z " />
      </svg>
    </IconButton>
    <IconButton className="mr-3">
      <svg viewBox="0 0 24 24" width="16" height="16">
        <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z " />
      </svg>
    </IconButton>
    <IconButton className="mr-3">
      <svg viewBox="0 0 24 24" width="16" height="16">
        <path d="M4 12l1.41 1.41L11 7.83V20h2V7.83l5.58 5.59L20 12l-8-8-8 8z " />
      </svg>
    </IconButton>
  </div>
));
