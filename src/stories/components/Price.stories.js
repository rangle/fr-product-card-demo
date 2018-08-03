import React from 'react';
import { storiesOf } from '@storybook/react';

import WithHtmlVariant from '../WithHtmlVariant';
import { Price } from '../../ui-kit';

storiesOf('Components|Price', module)
  .add('regular', () => (
    <WithHtmlVariant>
      <Price price={125} />
    </WithHtmlVariant>
  ))
  .add('on sale', () => (
    <WithHtmlVariant>
      <Price price={130} onSale salePrice={90.98} />
    </WithHtmlVariant>
  ));
