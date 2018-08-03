import React from 'react';
import { storiesOf } from '@storybook/react';

import WithHtmlVariant from '../WithHtmlVariant';
import { ProductCard } from '../../ui-kit';
import shoes from '../shoes';

storiesOf('Components|ProductCard', module).add('default', () => (
  <WithHtmlVariant>
    <div
      className="py-3"
      style={{
        display: 'grid',
        // gridTemplateColumns: 'repeat(auto-fill, 256px)',
        gridTemplateColumns: 'repeat(3, 256px)',
        gridAutoRows: '325.26582272px',
        // gridAutoRows: 'max-content',
        // gridAutoColumns: 'max-content',
        gridGap: '1rem',
        gridAutoFlow: 'dense',
      }}
    >
      {shoes.map(shoe => (
        <ProductCard
          key={shoe.id}
          shoe={shoe}
          style={{
            gridColumnEnd: shoe.id === 1 ? 'span 2' : 'span 1',
            gridRowEnd: shoe.id === 1 ? 'span 2' : 'span 1',
          }}
        />
      ))}
    </div>
  </WithHtmlVariant>
));
