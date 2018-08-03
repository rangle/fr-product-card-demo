import React from 'react';
import { withClassName } from './classnames-mapper';

export const IconButton = props => (
  <button {...withClassName('IconButton', props)} />
);
