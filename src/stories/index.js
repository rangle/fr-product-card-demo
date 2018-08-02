import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import '../output.css';

import Intro from './Intro';
import { Box, IconButton } from '../ui-kit';

storiesOf('Welcome', module).add('to Storybook', () => <Intro />);

storiesOf('Box', module)
  .add('with padding', () => (
    <React.Fragment>
      <Box bg="dark-gray" text="white" p={0} mb={3}>
        0
      </Box>
      <Box bg="dark-gray" text="white" p={1} mb={3}>
        1
      </Box>
      <Box bg="dark-gray" text="white" p={2} mb={3}>
        2
      </Box>
      <Box bg="dark-gray" text="white" p={3} mb={3}>
        3
      </Box>
      <Box bg="dark-gray" text="white" p={4} mb={3}>
        4
      </Box>
      <Box bg="dark-gray" text="white" p={5} mb={3}>
        5
      </Box>
      <Box bg="dark-gray" text="white" p={6} mb={3}>
        6
      </Box>
      <Box bg="dark-gray" text="white" p={7} mb={3}>
        7
      </Box>
    </React.Fragment>
  ))
  .add('with margin', () => (
    <React.Fragment>
      <Box bg="dark-gray" text="white" ml={0} mb={3} p={3}>
        0
      </Box>
      <Box bg="dark-gray" text="white" ml={1} mb={3} p={3}>
        1
      </Box>
      <Box bg="dark-gray" text="white" ml={2} mb={3} p={3}>
        2
      </Box>
      <Box bg="dark-gray" text="white" ml={3} mb={3} p={3}>
        3
      </Box>
      <Box bg="dark-gray" text="white" ml={4} mb={3} p={3}>
        4
      </Box>
      <Box bg="dark-gray" text="white" ml={5} mb={3} p={3}>
        5
      </Box>
      <Box bg="dark-gray" text="white" ml={6} mb={3} p={3}>
        6
      </Box>
      <Box bg="dark-gray" text="white" ml={7} mb={3} p={3}>
        7
      </Box>
    </React.Fragment>
  ));

storiesOf('IconButton', module).add('with SVG icon', () => (
  <IconButton>
    <svg viewBox="0 0 24 24" width="16" height="16">
      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z " />
    </svg>
  </IconButton>
));
