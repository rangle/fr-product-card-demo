import React from 'react';
import { map } from './classnames-mapper';

export const Box = props => <div {...map(props)} />;
