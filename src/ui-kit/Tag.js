import React from 'react';
import { withClassName } from './classnames-mapper';

export const Tag = props => <p {...withClassName('Tag', props)} />;
