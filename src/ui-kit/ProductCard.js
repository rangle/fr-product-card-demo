import React from 'react';
import { Box } from './Box';
import { Text } from './Text';
import { ImageCard } from './ImageCard';
import { Tag } from './Tag';
import { Favourite } from './Favourite';
import { Price } from './Price';

const statusText = status =>
  ({
    NEW: 'New',
    SALE: 'Sale',
  }[status]);

export const ProductCard = ({ shoe, ...props }) => (
  <ImageCard
    ratio={632 / 803}
    src={shoe.image}
    {...props}
    tl={shoe.status && <Tag>{statusText(shoe.status)}</Tag>}
    tr={<Favourite className="m-2 p-2" isFavourite={shoe.favourite} />}
    bl={
      <Box ml={3} mb={2}>
        <Text dashWidth={1} fontSize={1} lineHeight="solid" mb={1}>
          {shoe.name}
        </Text>
        <Price {...shoe} />
      </Box>
    }
  />
);
