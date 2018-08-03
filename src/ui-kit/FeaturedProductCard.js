import React from 'react';
import { Box } from './Box';
import { ImageCard } from './ImageCard';
import { Heading } from './Heading';

export const FeaturedProductCard = ({ shoe, ...props }) => (
  <ImageCard
    {...props}
    ratio={632 / 803}
    src={shoe.image}
    bl={
      <Box ml={3} mb={2}>
        <Heading dashWidth={12} className="text-4 leading-solid mb-2">
          {shoe.name}
        </Heading>
      </Box>
    }
  />
);
