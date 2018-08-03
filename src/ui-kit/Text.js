import React from 'react';
import { withClassName } from './classnames-mapper';

export const Text = ({ is = 'p', strikethrough, ...props }) =>
  React.createElement(is, {
    ...withClassName('Text', props),
  });

export const Strikethrough = ({ strikethrough, ...props }) => (
  <span {...withClassName('Strikethrough', props)} />
);
