import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import '../output.css';

import Intro from './Intro';
import { Box } from '../ui-kit';

storiesOf('Welcome', module).add('to Storybook', () => (
  <div>
    <Intro />
  </div>
));

storiesOf('Box', module)
  .add('with padding', () => (
    <React.Fragment>
      <Box bg="near-black" text="white" p={0} mb={3}>
        0
      </Box>
      <Box bg="near-black" text="white" p={1} mb={3}>
        1
      </Box>
      <Box bg="near-black" text="white" p={2} mb={3}>
        2
      </Box>
      <Box bg="near-black" text="white" p={3} mb={3}>
        3
      </Box>
      <Box bg="near-black" text="white" p={4} mb={3}>
        4
      </Box>
      <Box bg="near-black" text="white" p={5} mb={3}>
        5
      </Box>
      <Box bg="near-black" text="white" p={6} mb={3}>
        6
      </Box>
      <Box bg="near-black" text="white" p={7} mb={3}>
        7
      </Box>
    </React.Fragment>
  ))
  .add('with margin', () => (
    <React.Fragment>
      <Box bg="near-black" text="white" ml={0} mb={3} p={3}>
        0
      </Box>
      <Box bg="near-black" text="white" ml={1} mb={3} p={3}>
        1
      </Box>
      <Box bg="near-black" text="white" ml={2} mb={3} p={3}>
        2
      </Box>
      <Box bg="near-black" text="white" ml={3} mb={3} p={3}>
        3
      </Box>
      <Box bg="near-black" text="white" ml={4} mb={3} p={3}>
        4
      </Box>
      <Box bg="near-black" text="white" ml={5} mb={3} p={3}>
        5
      </Box>
      <Box bg="near-black" text="white" ml={6} mb={3} p={3}>
        6
      </Box>
      <Box bg="near-black" text="white" ml={7} mb={3} p={3}>
        7
      </Box>
    </React.Fragment>
  ));
