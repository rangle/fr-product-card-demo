import React from 'react';
import { Text, Strikethrough } from './Text';

export const Price = ({ price, onSale, salePrice }) => {
  const PriceWrapper = onSale ? Strikethrough : 'span';

  return (
    <Text className="text-6">
      <PriceWrapper>${price}</PriceWrapper>
      {onSale && (
        <Text is="span" className="ml-2 text-red text-6">
          ${salePrice}
        </Text>
      )}
    </Text>
  );
};
