import React from 'react';
import { withClassName } from './classnames-mapper';

export const BackgroundImage = ({ src, ratio, ...props }) => (
  <div
    style={{
      backgroundImage: src ? `url(${src})` : undefined,
      paddingBottom: (1 / ratio) * 100 + '%',
    }}
    {...withClassName('BackgroundImage', props)}
  />
);
