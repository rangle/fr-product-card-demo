import React from 'react';
import { Box } from './Box';
import { ImageCard } from './ImageCard';
import { Tag } from './Tag';
import { Favourite } from './Favourite';
import { Price } from './Price';
import { Heading } from './Heading';

const statusText = status =>
  ({
    NEW: 'New',
    SALE: 'Sale',
  }[status]);

export const ProductCard = ({ shoe, ...props }) => (
  <ImageCard
    {...props}
    ratio={632 / 803}
    src={shoe.image}
    tl={shoe.status && <Tag>{statusText(shoe.status)}</Tag>}
    tr={<Favourite className="m-2 p-2" isFav={shoe.favourite} />}
    bl={
      <Box ml={3} mb={2}>
        <Heading dashWidth={8} className="text-6 leading-solid mb-2">
          {shoe.name}
        </Heading>
        <Price
          price={shoe.price}
          salePrice={shoe.salePrice}
          onSale={shoe.status === 'SALE'}
        />
      </Box>
    }
  />
);
