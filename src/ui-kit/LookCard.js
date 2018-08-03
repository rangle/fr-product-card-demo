import React from 'react';
import { Box } from './Box';
import { Text } from './Text';
import { BackgroundImage } from './BackgroundImage';

export const LookCard = ({ image, name, likes, ...props }) => (
  <Box {...props}>
    <BackgroundImage ratio={1 / 1} src={image} />
    <Text className="text-5 leading-copy mt-2 mb-0 flex items-center">
      <span className="flex-1">{name}</span>
      <svg
        viewBox="0 0 24 24"
        className="block mr-1 mb-1"
        width="1em"
        height="1em"
        fill="currentcolor"
      >
        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z " />
      </svg>
      {likes}
    </Text>
  </Box>
);
