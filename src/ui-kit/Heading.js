import React from 'react';
import { Box } from './Box';
import { withClassName } from './classnames-mapper';

export const Heading = ({ is = 'h1', dashWidth = 4, children, ...props }) =>
  React.createElement(
    is,
    { ...withClassName('Heading', props) },
    <Box className="inline-flex items-center">
      {children}
      <Box className={`Heading__Dash w-${dashWidth}`} />
    </Box>,
  );
