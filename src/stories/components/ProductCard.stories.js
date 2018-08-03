import React from 'react';
import { storiesOf } from '@storybook/react';

import WithHtmlVariant from '../WithHtmlVariant';
import { ProductCard } from '../../ui-kit';
import shoes from '../shoes';

storiesOf('Components|ProductCard', module).add('default', () => (
  <div
    className="p-4"
    style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, 256px)',
      gridAutoRows: 'max-content',
      gridAutoColumns: 'max-content',
      gridGap: '1rem',
      justifyContent: 'center',
    }}
  >
    {shoes.map(shoe => (
      <ProductCard key={shoe.id} className="w-full" shoe={shoe} />
    ))}
  </div>
));
